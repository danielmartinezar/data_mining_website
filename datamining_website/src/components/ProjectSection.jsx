import React from "react";

export default function ProjectSection() {
  const overviewData = [
    {
      img: "./images/overviewImageDM.jpg",
      description:
        "In this graph, we first observe a general view of the correlation among the variables and how they interact with each other, classified into categories, where 0 refers to not having diabetes and 1 to having it.",
    },
    {
      img: "./images/populationImage.jpg",
      description:
        "In the second graph, we see the population density of this dataset, which despite not being 100% due to issues such as obesity, genetics, and poor diet, is increasing over the years and covers a large percentage of a sample.",
    },
    {
      img: "./images/direct-correlation-BMI-Blood.jpg",
      description:
        "Lastly, in the third graph, we can see the direct correlation between two variables such as BMI and blood glucose.",
    },
  ];
  return (
    <div className="mb-10 leading-6">
      <h2 className="text-6xl font-bold text-[#001657] mt-10 lg:mt-52 mb-8 md:mb-12">
        {"<Project Section/>"}
      </h2>
      <h3 className="text-center font-semibold text-5xl text-[#0050ff] ">
        Dataset Description
      </h3>
      <div>
        <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
          <b>DIABETES RISK FACTORS DATASET: </b>
          The dataset for the purpose of diabetes prediction contains a variety
          of features associated with risk factors for diabetes. These features
          may include variables such as blood sugar levels, body mass index
          (BMI), age, family history, and other relevant health indicators. Each
          row includes a diagnosis of whether the patient has diabetes in order
          to train a model capable of predicting this disease based on other
          factors. Additionally, this dataset may be utilized to explore
          relationships between various health metrics and diabetes diagnosis,
          as well as to develop and evaluate predictive models for identifying
          individuals at risk of developing diabetes.
        </p>
      </div>
      <h3 className="text-center font-semibold text-5xl text-[#0050ff] ">
        Hypotheses
      </h3>
      <div>
        <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657] ">
          <b>Hypotheses about risk factors and diagnosis:</b> Patients with higher
          levels of blood glucose are more likely to be diagnosed with diabetes.
          Additionally, high blood pressure (hypertension) is associated with a
          greater risk of diabetes, as both conditions are linked to insulin
          resistance.<br/> <b>Hypotheses about relationships between variables:</b> There is
          a correlation between BMI and blood glucose, as obesity may contribute
          to insulin resistance and thus increase blood glucose levels.<br/>
          <b>Hypothesis about the effectiveness of the prediction model:</b> A machine
          learning model trained with this dataset will be able to accurately
          predict the diagnosis of diabetes in new patients, using features such
          as the number of pregnancies, blood glucose level, blood pressure,
          BMI, and age.
        </p>
      </div>
      <h3 className="text-center font-semibold text-5xl text-[#0050ff] ">
      Why Use This Dataset?
      </h3>
      <div>
        <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
          We chose to use this health dataset because we believe that diabetes
          and directly related to issues such as obesity, these are becoming
          increasingly common due to poor dietary habits and, in some cases,
          people's emotional states. That's why this model helps to predict if a
          patient has diabetes. In this dataset, we have various risk factors
          such as pregnancies, blood glucose levels, blood pressure, BMI, and
          other data that will be useful for training a model capable of
          predicting whether a patient has this disease or not.
        </p>
      </div>
      <h3 className="text-center font-semibold text-5xl text-[#0050ff] ">
        Overview
      </h3>
      {overviewData.map((data) => {
        return (
          <div className="mt-10 lg:mt-10 lg:ml-20 ml-8 mr-8">
            <div className="w-fit h-fit lg:w-[580px] lg:h-[580px] md:w-[320px] md:h-[320px] lg:mx-auto">
              <img alt="overview" src={data.img} className="w-full h-full" />
            </div>
            <div className="text-center sm:text-left mt-10">
              <p className="lg:text-left text-center text-xl lg:text-2xl text-[#001657]">
                {data.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
