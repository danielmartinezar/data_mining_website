import React from "react";
import Lightbox from "./lightBox";

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
        "Lastly, in the third graph, we can see the direct correlation between two variables such as BMI and blood glucose.",
    },
  ];

  return (
    <div id="project-section">
      <div className="container mx-auto mt-16 mb-20 px-8 lg:px-0">
        <h2 className="text-6xl font-bold text-[#001657] mb-12 text-center">
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
            resistance.<br /> <b>Hypotheses about relationships between variables:</b> There is
            a correlation between BMI and blood glucose, as obesity may contribute
            to insulin resistance and thus increase blood glucose levels.<br />
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
        <div className="mt-16 grid gap-16 grid-cols-1 lg:grid-cols-3">
          {overviewData.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <Lightbox imageUrl={data.img} />
              <p className="text-lg text-[#001657] leading-relaxed">
                {data.description}
              </p>
            </div>
          ))}
        </div> 
        <div className="mt-16 text-center">
          <h3 className="font-semibold text-5xl text-[#0050ff] mb-8">
            Objectives for Estimation
          </h3>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657] ">
            <b>Predictive Modeling:</b> The primary objective is to develop a
            predictive model that accurately identifies individuals at risk of
            diabetes based on the given features. This involves training machine
            learning algorithms on historical data to predict whether a person
            has diabetes or not. <br />
            <b>Feature Importance:</b> Understand which features have the most
            significant impact on predicting diabetes. Identifying these key
            features can provide insights into the underlying factors
            contributing to the condition. <br />
            <b>Model Interpretability:</b> Strive for models that are interpretable,
            allowing us to understand the reasoning behind predictions. This is
            crucial for gaining trust from stakeholders and potentially uncovering
            actionable insights for medical professionals. <br />
            <b>Scalability:</b> Ensure that the developed models are scalable and
            can handle larger datasets in the future. This includes optimizing
            model performance and computational efficiency. <br />
            <b>Ethical Considerations:</b> Consider the ethical implications of using
            predictive models in healthcare. Ensure fairness, transparency, and
            accountability in model development and deployment to mitigate biases
            and potential harm to individuals.
          </p>
        </div>
        <div className="mt-16 text-center">
          <h3 className="font-semibold text-5xl text-[#0050ff] mb-8">
            Our Initial Model Selection
          </h3>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
            <b>Logistic Regression:</b> Given that the target variable (diagnosis) is binary (0 for no diabetes, 1 for diabetes), logistic regression is a natural choice for our initial model selection. It's simple, interpretable, and can provide insights into the relationship between the features and the likelihood of diabetes.
          </p>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
            <b>Decision Trees:</b> Decision trees are also considered for their simplicity and interpretability. They can handle both numerical and categorical data effectively, making them suitable for our dataset which comprises a mix of both types.
          </p>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
            <b>Random Forest:</b> Random Forest is chosen as a more complex model compared to decision trees. It's an ensemble learning method that combines multiple decision trees to improve predictive performance and reduce overfitting. Given the complexity of factors influencing diabetes, a Random Forest model may capture more intricate patterns in the data.
          </p>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
            Our initial model selection encompasses a range of algorithms, from simpler ones like logistic regression and decision trees to more complex ensemble methods. This approach allows us to compare the performance of different models and choose the one that best suits our objectives in terms of accuracy, interpretability, and scalability.
          </p>
        </div>

        <div className="text-center mt-16">
          <h3 className="font-semibold text-5xl text-[#0050ff] mb-8">
            Validation Methods and Metrics Employed
          </h3>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657] ">
            <b>Validation Methods:</b> We'll partition the dataset into training
            and testing sets. The training set will be used to train the models,
            while the testing set will be used to evaluate their performance. This
            helps us estimate how well the models generalize to unseen data.
            <br />
            <b>Metrics Employed:</b> Accuracy, Precision and Recall, and F1 Score
            will be employed to evaluate the performance of the models. These
            metrics provide insights into the overall correctness of predictions,
            as well as the model's ability to correctly identify positive cases
            (diabetes) and balance between precision and recall.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Lightbox imageUrl={"./images/heatmap.png"} />
        </div>
        <br></br>
        <div className="flex justify-center items-center">
          <Lightbox imageUrl={"./images/models.jpg"} />
        </div>
        <br></br>
        <div className="flex justify-center items-center">
          <Lightbox imageUrl={"./images/accuracy.png"} />
        </div>
        <div className="mt-16 text-center">
          <h3 className="font-semibold text-5xl text-[#0050ff] mb-8">
            Preliminary Conclusions
          </h3>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
            Based on the initial analysis using the Decision Tree Classifier without specifying the max depth parameter and employing a simple train-test split, the following observations can be made:
          </p>
          <ol className="text-left lg:text-2xl text-[#001657] mb-8 ml-8">
            <li><b>Moderate Accuracy:</b> The model achieved an accuracy of 0.6 on the test set, indicating that it correctly classified 60% of the instances. While this accuracy is above random chance, it suggests that the model's performance may be improved.</li>
            <li><b>Class Imbalance Impact:</b> The precision and recall values for the positive class (1) are notably lower than those for the negative class (0). This discrepancy suggests that the model struggles more with correctly identifying instances of diabetes (class 1), which could be attributed to the class imbalance in the dataset.</li>
            <li><b>Low F1 Score:</b> The F1 score, which combines precision and recall into a single metric, is relatively low at 0.29. This indicates that the model's performance is suboptimal, especially considering the trade-off between precision and recall.</li>
            <li><b>Potential for Improvement:</b> While the initial results indicate room for improvement in the model's performance, they also provide valuable insights into areas that can be addressed. Fine-tuning hyperparameters, exploring different algorithms, and addressing class imbalance are potential avenues for enhancing the model's predictive capabilities.</li>
          </ol>
          <p className="mt-4 mb-8 text-left lg:text-2xl text-[#001657]">
            In conclusion, while the initial analysis provides a baseline understanding of the model's performance, further experimentation and refinement are necessary to develop a more robust and accurate predictive model for diabetes diagnosis.
          </p>
        </div>
      </div>
    </div>

  );
}
