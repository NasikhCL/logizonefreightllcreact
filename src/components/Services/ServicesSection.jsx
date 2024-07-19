import React from "react";

const servicesArray = [
  {
    id: 1,
    serviceTitle: "Freight Forwarding",
    serviceDescription:
      "Our Freight Forwarding service is designed to streamline your shipping needs with efficiency and reliability. We understand that transporting goods can be complex and challenging, which is why we offer comprehensive solutions tailored to meet your specific requirements.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#FFFFFF"
      >
        <path d="m272-271-118-66 30-30 99 14 177-177-320-175 41-41 393 102 118-119q15-15 35.5-15t35.5 15q15 15 15 35.5T763-692L645-573l102 393-41 41-175-320-177 177 14 99-30 30-66-118Z" />
      </svg>
    ),
  },
  {
    id: 2,
    serviceTitle: "Customs Clearance",
    serviceDescription:
      "Our Customs Clearance service ensures that your shipments pass through customs smoothly and without delays. We handle all the complex documentation and compliance requirements, so you can focus on your core business activities.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="m423-329 277-277-43-43-234 234-121-121-42 42 163 165ZM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm0-60h600v-600H180v600Zm300-617q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM180-180v-600 600Z" />
      </svg>
    ),
  },
  {
    id: 3,
    serviceTitle: "Food Items Clearance",
    serviceDescription:
      "We specialize in the clearance of food items, ensuring that your perishable goods pass through customs swiftly and in compliance with all regulatory requirements. Our expert team handles all the complexities associated with food imports and exports, so your products reach their destination in optimal condition.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M646-80q-100 0-167-67t-67-167q0-100 67-167t167-67q100 0 167 67t67 167q0 100-67 167T646-80Zm0-60q72 0 123-51t51-123q0-72-51-123t-123-51q-72 0-123 51t-51 123q0 72 51 123t123 51Zm-506-20q-24 0-42-18t-18-42v-330q0-13 1.5-21t6.5-19l92-200h-22q-15 0-24.5-9.5T124-824v-22q0-15 9.5-24.5T158-880h261q15 0 24.5 9.5T453-846v22q0 15-9.5 24.5T419-790h-22l96 222q-12 6-25 15t-24 18L329-790h-82L140-559v339h224q3 15 10 31t15 29H140Zm506-438q-36 0-60-24t-24-60q0-36 24-60t60-24v168q0-36 24-60t60-24q36 0 60 24t24 60H646Z" />
      </svg>
    ),
  },
  {
    id: 4,
    serviceTitle: "Warehousing",
    serviceDescription:
      "Our Warehousing service offers secure, efficient, and strategically located storage solutions for your goods. Whether you need short-term storage or long-term inventory management, our state-of-the-art facilities are designed to meet your diverse warehousing needs.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#FFFFFF"
      >
        <path d="M140-180h120v-320h440v320h120v-460L480-776 140-640v460Zm-60 60v-560l400-160 400 160v560H640v-320H320v320H80Zm290 0v-60h60v60h-60Zm80-120v-60h60v60h-60Zm80 120v-60h60v60h-60ZM260-500h440-440Z" />
      </svg>
    ),
  },
  {
    id: 5,
    serviceTitle: "Product Registration",
    serviceDescription:
      "Our Product Registration service ensures that your products comply with all regulatory requirements before they hit the market. We manage the entire registration process, helping you navigate the complex regulatory landscape to achieve timely and efficient product approvals.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M360-640v-60h360v60H360Zm0 120v-60h360v60H360Zm140 380H180h320Zm0 60H225q-43.75 0-74.37-30.63Q120-141.25 120-185v-135h120v-560h600v381q-15-2-30.37-.03-15.38 1.97-29.63 7.03v-328H300v500h292l-60 60H180v75q0 19.12 13 32.06Q206-140 224-140h276v60Zm60 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T902.09-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
      </svg>
    ),
  },
  {
    id: 6,
    serviceTitle: "Municipality Handling",
    serviceDescription:
      "Our Municipality Handling service simplifies the process of managing municipal regulations and requirements for your shipments. We ensure that all necessary permits and documentation are in order, facilitating smooth operations and compliance with local government authorities.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532L480-852 214-700ZM80-121v-60h500q2 14 3.5 28.5T591-121H80Zm608-291v-168h60v138l-60 30ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-21-120 142-142-28-28-114 114-59-59-28 28 87 87ZM214-700h532-532Z" />
      </svg>
    ),
  },
  {
    id: 7,
    serviceTitle: "FCL and LCL Shipment",
    serviceDescription:
      "We offer comprehensive solutions for both Full Container Load (FCL) and Less than Container Load (LCL) shipments to meet your diverse shipping needs. Whether you need to transport a full container or consolidate smaller shipments, our services are designed to provide flexibility, efficiency, and cost-effectiveness.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M224.12-161q-49.12 0-83.62-34.42Q106-229.83 106-279H40v-461q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.17-34.38 83.58Q780.24-161 731.12-161t-83.62-34.42Q613-229.83 613-279H342q0 49-34.38 83.5t-83.5 34.5Zm-.12-60q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100-339h22q17-27 43.04-43t58-16q31.96 0 58.46 16.5T325-339h294v-401H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754-573h-75v148ZM360-529Z" />
      </svg>
    ),
  },
  {
    id: 8,
    serviceTitle: "FIRS Follow-Up and Closing",
    serviceDescription:
      "Our FIRS (Federal Inland Revenue Service) Follow-Up and Closing service ensures that all your tax obligations and compliance requirements are managed efficiently. We handle the entire process from initial follow-ups to closing out any outstanding issues, providing you with peace of mind and ensuring full compliance with tax regulations.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M196-331q-20-36-28-72.5t-8-74.5q0-131 94.5-225.5T480-798h43l-80-80 39-39 149 149-149 149-40-40 79-79h-41q-107 0-183.5 76.5T220-478q0 29 5.5 55t13.5 49l-43 43ZM476-40 327-189l149-149 39 39-80 80h45q107 0 183.5-76.5T740-479q0-29-5-55t-15-49l43-43q20 36 28.5 72.5T800-479q0 131-94.5 225.5T480-159h-45l80 80-39 39Z" />
      </svg>
    ),
  },
  {
    id: 9,
    serviceTitle: "Import and Export",
    serviceDescription:
      " we offer comprehensive Import and Export services to facilitate seamless international trade. Our solutions cover all aspects of the import and export process, ensuring that your goods move efficiently and comply with all regulatory requirements.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M480-408ZM156-200 82-457q-4-12 1.5-23.5T101-496l59-20v-224q0-25 17.5-42t42.5-18h150v-120h220v120h150q24.75 0 42.38 17.62Q800-764.75 800-740v225l60 19q11 4 16.5 15t1.5 23l-74 258q-48-5-89.5-29T641-286q-32 36-72.68 61-40.69 25-88.32 25-47.63 0-88.32-25Q351-250 319-286q-32 33-73.5 57T156-200ZM80-40v-60h80q42 0 83-13t77-37q36 24 77 36t83 12q42 0 83-12t77-36q36 24 77 37t83 13h80v60h-80q-41 0-81-10.5T640-81q-39 20-80 30.5T480-40q-39 0-80-10.5T320-81q-39 20-78.8 30.5T159.6-40H80Zm140-495 260-84 260 85v-206H220v205Zm259.5 275q51.5 0 91.5-41t69-76q25 30 55.5 58.5T762-269l51-179-333-108-334 108 52 177q35-19 66.5-47.5T320-377q30 36 69 76.5t90.5 40.5Z" />
      </svg>
    ),
  },
  {
    id: 10,
    serviceTitle: "MOE and MOCCAE Handling",
    serviceDescription:
      "Our MOE (Ministry of Environment) and MOCCAE (Ministry of Climate Change and Environment) Handling services ensure that your environmental and climate-related regulatory requirements are managed efficiently. We navigate the complexities of these ministries' regulations to ensure your operations are compliant and streamlined.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M480-730v-79.58q0-33.42 23.5-56.92t56.92-23.5H640v79.58q0 33.42-23.5 56.92T559.58-730H480ZM200-490q-49.71 0-84.86-35.14Q80-560.29 80-610v-120h120q49.71 0 84.86 35.14Q320-659.71 320-610v120H200ZM640-90q-42 0-79.63-13.6Q522.74-117.2 492-141l-31 31q-9 9-20.5 9t-20.5-9q-9-9-9-20.5t9-20.5l31-31q-23.8-30.88-37.4-68.68Q400-288.47 400-330q0-100 70-170.5T640-571h241v241q0 100-70.5 170T640-90Zm0-60q75.43 0 127.21-53.17Q819-256.34 819-331v-179H641q-74.66 0-127.83 52.31T460-330q0 29.47 9 55.73Q478-248 494-225l126-126q9-9 20.5-9t20.5 9q9 9 9 20.5t-9 20.5L535-184q23 16 49.27 25 26.26 9 55.73 9Zm0-180Z" />
      </svg>
    ),
  },
  {
    id: 11,
    serviceTitle: "Shipping Dangerous Goods",
    serviceDescription:
      "we specialize in the safe and compliant shipping of dangerous goods, ensuring that hazardous materials are handled with the utmost care and in accordance with all regulations. Our services are designed to manage the complexities of transporting dangerous goods while minimizing risks and ensuring compliance.",
    serviceSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path d="M480-823 213-669l267 155 266-155-266-154ZM120-310v-340q0-16 7.88-29.79Q135.75-693.57 150-702l300-173q8-5 14.95-6.5 6.95-1.5 15-1.5t15.55 1.5Q503-880 510-875l300 173q14.25 8.43 22.13 22.21Q840-666 840-650v210h-60v-180L481-445 180-619v309l300 173v69L150-258q-14.25-8.43-22.12-22.21Q120-294 120-310ZM729.5-60q8.5 0 14.5-5.5t6-14.5q0-9-6-14.5t-14-5.5q-9 0-14.5 5.5T710-80q0 9 5.5 14.5t14 5.5ZM710-140h40v-180h-40v180ZM730 0q-78 0-134-55.4t-56-134q0-78.6 56-134.6t134-56q78 0 134 55.87 56 55.86 56 135.13 0 78.43-56 133.72Q808 0 730 0ZM480-478Z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
          <h1 className="display-6 mb-5">Services We Offer</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {servicesArray.map((item) => {
            return (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded h-100 p-5">
                  <div className="d-flex align-items-center ms-n5 mb-4">
                    <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                      {item.serviceSvg}
                    </div>
                    <h4 className="mb-0">{item.serviceTitle}</h4>
                  </div>
                  <p className="mb-4">{item.serviceDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
