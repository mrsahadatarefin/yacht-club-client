import React from 'react';
import { useForm } from 'react-hook-form';


const AddService = () => {
    // const imageHostKey = process.env.REACT_APP_imageBB_key;
    const { handleSubmit, register,formState:{errors} } = useForm();
   
   
    
    
const handleAddService = data =>{
   


const image = data.image[0];
const formData = new FormData();
formData.append('image', image);
 const url = 'https://api.imgbb.com/1/upload?expiration=600&key=aa28514066e54d1a382e1e6e77dc0b55}';
fetch(url,{
    method:'POST',
    body:formData
})
.then(res => res.json())
.then(imageData => {
    console.log(imageData)})

}

    return (
        
        <div className="  flex justify-center items-center">
        <div className="w-96 bg-[#f8ecef] rounded-lg p-7">
          <h2 className="text-5xl text-center pt-20 font-bold">Add service</h2>
          <p className='text-xl text-center pt-5'>Tell me what you want to sell</p>
          <form onSubmit={handleSubmit(handleAddService)}>
            <div className="form-control w-full max-w-xs mt-10">
              <label className="label">
                <span className="label-text">service name</span>
                <toast></toast>
              </label>
              <input
                {...register("service", { required: "*service name is required" })}
                type="text"
                className="input input-bordered w-full max-w-md"
              />
              {errors.service && (
                <p role="alert" className="text-red-600">
                  {errors.service?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">price</span>
                <toast></toast>
              </label>
              <input
                {...register("price", { required: "*price is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.price && (
                <p role="alert" className="text-red-600">
                  {errors.price?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Capacity</span>
                <toast></toast>
              </label>
              <input
                {...register("Capacity", { required: "*Capacity is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.Capacity && (
                <p role="alert" className="text-red-600">
                  {errors.Capacity?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Water area</span>
                <toast></toast>
              </label>
              <input
                {...register("WaterArea", { required: "*Water Area is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.WaterArea && (
                <p role="alert" className="text-red-600">
                  {errors.WaterArea?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Point of departure</span>
                <toast></toast>
              </label>
              <input
                {...register("PointOfDeparture", { required: "*Point of departure Area is required" })}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.PointOfDeparture && (
                <p role="alert" className="text-red-600">
                  {errors.PointOfDeparture?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">description</span>
                <toast></toast>
              </label>
              <textarea
                {...register("description", { required: "*description is required" })}
                type="text"
                className="textarea textarea-bordered w-full max-w-xs"
                placeholder="description"
              />
              {errors.description && (
                <p role="alert" className="text-red-600">
                  {errors.description?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">ADD your service image</span>
                <toast></toast>
              </label>
              <input
                {...register("image", { required: "*image  is required" })}
                type="file"
                className="file-input input-bordered w-full max-w-xs"
                
              />
              {errors.image && (
                <p role="alert" className="text-red-600">
                  {errors.image?.message}
                </p>
              )}
            </div>
            
  
            <input
              className="btn btn-accent w-full mt-5 "
              value="submit"
              type="submit"
            />
          
          </form>
         
  
       
        </div>
      </div>

    );
};

export default AddService;