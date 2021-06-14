module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: {type:String},
        image:{type:String},
        description: {type:String},
        published:{ type :Boolean}
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };    