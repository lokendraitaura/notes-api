module.exports = function removeVersionAndTransform(schema) {
    // ✅ Manually add timestamps fields
    schema.add({
      createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    });
  
    // ✅ Update updatedAt before save
    schema.pre('save', function (next) {
      this.updatedAt = Date.now();
      next();
    });
  
    // ✅ Update updatedAt before findOneAndUpdate or updateMany
    schema.pre(['findOneAndUpdate', 'updateOne', 'updateMany'], function (next) {
      this.set({ updatedAt: Date.now() });
      next();
    });
  
    // ✅ Remove __v
    schema.set("versionKey", false);
  
    // ✅ Transform _id -> id
    function transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      return ret;
    }
  
    schema.set("toJSON", {
      virtuals: true,
      transform,
    });
  
    schema.set("toObject", {
      virtuals: true,
      transform,
    });
  };
  