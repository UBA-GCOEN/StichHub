import React from "react";
import Navbardark from "../components/Navbardark.jsx";
import gr from "../assets/img/gr.png";
import gr1 from "../assets/img/gr1.png";
import gr3 from "../assets/img/gr3.png";
import gr4 from "../assets/img/gr4.png";
import g5 from "../assets/img/g5.png";
import gr6 from "../assets/img/gr6.png";
import Footer from "../components/MainLandingPage/Footer.jsx";

// main definition
const ClothesCategory = () => {
  return (
    <div className="bg-[#040017]">
      {/* navigation bar */}
      <Navbardark />

      {/* hero page */}
      <div className="grid grid-col-2">
        <p className="text-white col-span-1 top-0 text-6xl font-bold mx-[7%] mt-[7%] mb-5">
          Stitch With <br />
          Custom Category
        </p>
        <h6 className="hidden lg:block text-white font-bold ml-[7%]">
          Choose Your Branded Fabric pattern, type of garment <br /> or select
          occasion friendly , according to your mood.
        </h6>
        <h6 className="block text-white font-bold ml-[7%] lg:hidden">
          Choose Your Branded Fabric pattern, type of garment or select occasion
          friendly , according to your mood.
        </h6>

        <button className="bg-blue-500 ml-[7%] mb-[25%] mt-5 w-[150px] px-6 py-1.5 rounded-xl text-white hover:bg-blue-600">
          Learn More
        </button>
        <img
          src={gr}
          className="lg:block absolute w-[50%] ml-[50%] col-span-1 hidden"
        />
        <img
          src={gr}
          className=" ml-[13%] mb-[250px] w-[60%] col-span-1 justify-center lg:hidden  "
        />
      </div>

      {/* clothes category boxes */}
      <div className="ml-[7%] ">
        <h4 className="text-white col-span-1 top-0 text-2xl font-bold mb-5 ml-[5%]">
          Stitch Our Top Category
        </h4>

        <div class="flex overflow-x-auto gap-4 m-[5%]  spcae-x-8 w-1/1 sm:w-1/1 mb-[20%]  lg:overflow-x-none ">
          {/* first block */}
          <div class="bg-[#ED5050] flex-shrink-0  rounded-[10px]  h-[200px] w-[200px] text-white text-center font-bold pt-3">
            Shirt/ Pants
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/fashion-6807362-5600842.png?f=webp"
              className="w-[90%] "
            />
          </div>
          {/* 2nd block */}
          <div class="bg-[#FFBB54] flex-shrink-0  rounded-[10px]  h-[200px] w-[200px] text-white text-center font-bold pt-3 ...">
            Coat/ Suits
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/shirt-shopping-6802508-5602012.png"
              className="w-[100%] object-cover mt-[-25px]"
            />
          </div>
          {/* 3rd block */}
          <div class="bg-[#00732E] flex-shrink-0 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold pt-3 ...">
            Lehengas
            <img
              src={gr1}
              className=" pb-3 object-cover h-[250px] mt-[-30px]"
            />
          </div>
          {/* 4th block */}
          <div class="bg-[#98C1FF] flex-shrink-0 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold pt-3 ...">
            Kurta/Kurti/Pajamas
            <img src={gr3} className="object-cover pt-5 ml-5  " />
          </div>
          {/* 5th block */}
          <div class="bg-[#E786FF] flex-shrink-0 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold pt-3 ...">
            formals/ Offices <br />
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/coat-6249197-5117392.png?f=webp"
              className=" justify-center w-[90%] ml-3"
            />
          </div>
        </div>
      </div>

      {/* Mens category layout  */}
      <div className="grid lg:grid-col-2  lg:w-[90%] h-auto rounded-r-2xl bg-gradient-to-r from-neutral-700 to-neutral-800 sm:w-[100%]">
        {/* image */}
        <div class="mb-[10%] bg-transparent lg:ml-[8%] mt-[-7%] col-start-1  rounded-[10px] col-end-2 h-[300px] lg:w-[500px] text-white text-center font-bold pt-3 ">
          <img
            src="https://imgeng.jagran.com/images/2022/sep/men%20formal%20shirts1663832127171.jpg"
            className="flex ml:0 lg:ml-[120px] w-[90%] h-[100%] rounded-2xl shadow-inner shadow-md "
          />
          <p className="ml-[5%] text-5xl font-poppins mt-5 lg:ml-[150px]">
            Mens Category
          </p>
        </div>

        {/* small blocks for categories */}
        <div class="grid grid-col-3 col-start-1  bg-transparent m-[1%] lg:col-start-2 rounded-[10px] lg:col-end-3 text-white text-center font-bold p-5 ...">
          {/* 1st */}
          <div class="relative col-start-1  rounded-[10px] col-end-2 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Shirts</p>
            </div>
          </div>
          {/* 2nd */}
          <div class="relative col-start-2  rounded-[10px] col-end-3 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://s.alicdn.com/@sc04/kf/Hcb6130a3858f4ed1877eb4a5ef467fad0.jpg_300x300.jpg"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Pants/trousers</p>
            </div>
          </div>
          {/* 3rd */}
          <div class="relative col-start-3  rounded-t-xl-[10px] col-end-4 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://img.freepik.com/premium-photo/new-business-men-s-suits-are-hanging-hangers-store-modern-fashionable-clothes-luxury-store-with-mens-clothing-designer-business-suits_678914-6119.jpg?w=740"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Coats</p>
            </div>
          </div>
          {/* 4th */}
          <div class="relative col-start-1  rounded-[10px] col-end-2 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=170667a&w=0&k=20&c=T9rwqgwv45lssYlSekcUP901NuVq-2A8PS9Vt4skHA8="
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Suits</p>
            </div>
          </div>
          {/* 5th */}
          <div class="relative col-start-2  rounded-[10px] col-end-3 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://media.istockphoto.com/id/1408851061/photo/female-summer-wardrobe-in-white-room.jpg?s=612x612&w=0&k=20&c=LNgDm8hEostbQ4xQmvVfIEPk2ex7DFjPnScfg2kUXFQ="
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Party wear</p>
            </div>
          </div>
          {/* 6th */}
          <div class="relative col-start-3  rounded-[10px] col-end-4 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10907866a.webp"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Occasionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* women's category banner  */}
      <div className="mt-[10%] grid grid-col-2 gap-4 lg:ml-[10%] h-auto rounded-l-2xl bg-gradient-to-r from-neutral-700 to-neutral-800 ">
        <div class="grid grid-col-3 mb-10 ml-[10%] bg-transparent m-[1%] col-start-1 rounded-[10px] col-end-2 text-white text-center font-bold pt-3 ...">
          {/* 1st */}
          <div class="relative col-start-1  rounded-[10px] col-end-2 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Shirts</p>
            </div>
          </div>
          {/* 2nd */}
          <div class="relative col-start-2  rounded-[10px] col-end-3 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://s.alicdn.com/@sc04/kf/Hcb6130a3858f4ed1877eb4a5ef467fad0.jpg_300x300.jpg"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Pants/trousers</p>
            </div>
          </div>
          {/* 3rd */}
          <div class="relative col-start-3  rounded-[10px] col-end-4 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://img.freepik.com/premium-photo/new-business-men-s-suits-are-hanging-hangers-store-modern-fashionable-clothes-luxury-store-with-mens-clothing-designer-business-suits_678914-6119.jpg?w=740"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Coats</p>
            </div>
          </div>
          {/* 4th */}
          <div class="relative col-start-1  rounded-[10px] col-end-2 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=170667a&w=0&k=20&c=T9rwqgwv45lssYlSekcUP901NuVq-2A8PS9Vt4skHA8="
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Suits</p>
            </div>
          </div>
          {/* 5th */}
          <div class="relative col-start-2  rounded-[10px] col-end-3 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://media.istockphoto.com/id/1408851061/photo/female-summer-wardrobe-in-white-room.jpg?s=612x612&w=0&k=20&c=LNgDm8hEostbQ4xQmvVfIEPk2ex7DFjPnScfg2kUXFQ="
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Party wear</p>
            </div>
          </div>
          {/* 6th */}
          <div class="relative col-start-3  rounded-[10px] col-end-4 h-[200px] w-[100px] text-white text-center font-bold pt-3">
            <img
              src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10907866a.webp"
              className=" object-cover rounded-t-xl h-[150px] "
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-b-lg bg-white opacity-100">
              <p class="mt-2 text-xs text-gray-900">Occasionals</p>
            </div>
          </div>
        </div>
        {/* banner image */}
        <div class="mb-[30%]  lg:mb-[0%] bg-transparent lg:ml-[8%] mt-[-7%] lg:col-start-2  rounded-[10px] lg:col-end-3 h-[300px] lg:w-[500px] text-white text-center font-bold pt-3 sm:ml-10">
          <img
            src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlcyUyMGhhbmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            className="w-[90%] h-[300px] rounded-2xl shadow-inner shadow-md "
          />
          <p className=" text-5xl font-poppins mt-14 lg:mr-14">
            Womens Category
          </p>
        </div>
      </div>

      {/* wear the best */}
      <img src={gr4} className="hidden lg:block ml-[12%]  w-[75%]" />
      <img src={g5} className="mt-[30%] ml-[10%] mb-[20%] w-[75%] lg:hidden" />

      {/* fabric pattern and styles from here */}
      <div className="ml-[7%]">
        <h4 className="text-white col-span-1 top-0 text-2xl font-bold mb-14">
          Fabric Patterns & Styles
        </h4>

        <img
          src={gr6}
          className=" hidden lg:block ml-[6%] mt-[-3%] absolute  w-[75%]"
        />

        {/* men's fabric blocks */}
        <div class="flex overflow-x-auto gap-4 m-[5%]  spcae-x-8 w-1/1 sm:w-1/1 mb-[15%]  lg:overflow-x-none mt-[5%] ">
          {/* 1st */}
          <div class="bg-[#ED5050] flex-shrink-0  col-start-1  rounded-[10px] col-end-2 h-[200px] w-[200px] text-white text-center font-bold">
            <img
              src="https://threadsmonthly.com/wp-content/uploads/2020/10/cotton-plaid-flannel-fabric-minervacrafts.jpg"
              className=" object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
          {/* 2nd */}
          <div class="bg-[#FFBB54] flex-shrink-0  mt-7 col-start-2 rounded-[10px] col-end-3 h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="https://threadsmonthly.com/wp-content/uploads/2020/10/brushed-cotton-bad-quality.jpg"
              className="object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
          {/* 3rd */}
          <div class="bg-[#00732E] flex-shrink-0  col-span-1 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="https://threadsmonthly.com/wp-content/uploads/2020/10/cotton-crossweave-fabric-close-up.jpg"
              className="object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
          {/* 4th */}
          <div class="bg-[#98C1FF] flex-shrink-0  mt-7 col-span-1 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="https://www.shopolics.com/uploads/images/medium/Unstitched-Trouser-1-3-Meter-Checks-Cotton-Wool-Fabric-Black-White-90384.jpg"
              className=" object-fill h-[200px] w-[100%] rounded-xl "
            />
          </div>
          {/* 5th */}
          <div class="bg-[#E786FF] flex-shrink-0  col-span-1 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="https://www.shopolics.com/uploads/images/medium/Gray-Plain-Unstitched-Trouser-Cotton-Wool-Fabric-42164.jpg"
              className=" object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
        </div>

        {/* women's fabric blocks */}
        <div class="flex overflow-x-auto gap-4 m-[5%]  spcae-x-8 w-1/1 sm:w-1/1 mb-[20%] ">
          {/* 1st */}
          <div class="bg-[#ED5050] flex-shrink-0 mt-7 col-start-1  rounded-[10px] col-end-2 h-[200px] w-[200px] text-white text-center font-bold">
            <img
              src="https://i.etsystatic.com/5977438/r/il/bace9f/3159371568/il_fullxfull.3159371568_hrrx.jpg"
              className=" object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
          {/* 2nd */}
          <div class="bg-[#FFBB54] flex-shrink-0 col-start-2  rounded-[10px] col-end-3 h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="https://fashinza.com/textile/wp-content/uploads/2021/05/shutterstock_794674687-1.jpg"
              className=" object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
          {/* 3rd */}
          <div class="bg-[#00732E] flex-shrink-0 mt-7 col-span-1 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="https://vrittidesigns.com/wp-content/uploads/2020/02/IMG_0018.jpg"
              className=" object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
          {/* 4th */}
          <div class="bg-[#98C1FF] flex-shrink-0 col-span-1 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="https://5.imimg.com/data5/ECOM/Default/2022/12/VP/UQ/MC/85504720/075a2039-500x500.jpg"
              className="  object-fill h-[200px] w-[100%] rounded-xl "
            />
          </div>
          {/* 5th */}
          <div class="bg-[#E786FF] flex-shrink-0 mt-7 col-span-1 rounded-[10px] h-[200px] w-[200px] text-white text-center font-bold ...">
            <img
              src="http://cdn.shopify.com/s/files/1/0052/2092/5553/collections/2_540x_540x_a0c59dae-31ec-41a2-a36d-fdfdcd738e09.jpg?v=1652507869"
              className="  object-fill h-[200px] w-[100%] rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ClothesCategory;
