import React from 'react';

const AdminInputForm = () => {
    return (
        <div>
            <div class="bg-white  rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">

  

    
    <div class="md:w-1/2 px-3 mb-5">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        Packer/Warehouse
      </label>
      <div class="relative  ">
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>Packer 1</option>
          <option>Packer 2</option>
          <option>Warehouse</option>
        </select>
       
      </div>
    </div>
    <div class="md:w-1/2 px-3 mb-5">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        Product
      </label>
      <div class="relative  ">
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>Product 1</option>
          <option>Product 1</option>
          <option>Product 1</option>
          <option>Product 1</option>
        </select>
       
      </div>
    </div>
    <div class="md:w-1/4 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        Quantity
      </label>
      <div class="relative  ">
        <input class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state"/>
         
        
       
      </div>
    </div>
   
  
</div>
        </div>
    );
};

export default AdminInputForm;
