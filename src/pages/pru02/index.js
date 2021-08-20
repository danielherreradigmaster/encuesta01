import React, { useState, useEffect } from "react";
import { message } from 'antd';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Welcome from '../../components/survey/welcome';
import Terms from '../../components/survey/terms';
import PersonalData from '../../components/survey/personalData';
import EvaluationStart from '../../components/survey/evaluationStart';
import Question1 from '../../components/survey/questions/question1';
import Question2 from '../../components/survey/questions/question2';
import Question3 from '../../components/survey/questions/question3';
import Question4 from '../../components/survey/questions/question4';
import Question5 from '../../components/survey/questions/question5';
import Question6 from '../../components/survey/questions/question6';
import Question7 from '../../components/survey/questions/question7';
import Question8 from '../../components/survey/questions/question8';
import ThankYou from '../../components/survey/thankYou';
import SurveyFooter from '../../components/survey/footer';
import './styles.scss';

const TOTAL_STEPS = 9;

const _terms = {
  checkboxName1: 'checkboxName1',
  checkboxName2: 'checkboxName2',
};

const _personalData = {
  email: '',
  fullname: '',
  company: '',
  position: '',
};

const termsSchema = yup.object().shape({
  checkboxName1: yup
              .bool().oneOf([true], 'Campo requerido'),
  checkboxName2: yup
              .bool().oneOf([true], 'Campo requerido'),
});

const personalDataSchema = yup.object().shape({
  email: yup
      .string()
      .required('Campo requerido'),
  fullname: yup.string().required('Campo requerido'),
  company: yup.string().required('Campo requerido'),
  position: yup.string().required('Campo requerido'),
});

const question1Schema = yup.object().shape({
  someGroupName1: yup.mixed().nullable().required('Campo requerido'),
}); 

const question2Schema = yup.object().shape({
  someGroupName2: yup.mixed().nullable().required('Campo requerido'),
});

const question3Schema = yup.object().shape({
  someGroupName3: yup.mixed().nullable().required('Campo requerido'),
});

const question4Schema = yup.object().shape({
  someGroupName4: yup.mixed().nullable().required('Campo requerido'),
});

const question5Schema = yup.object().shape({
  someGroupName5: yup.mixed().nullable().required('Campo requerido'),
});

const question6Schema = yup.object().shape({
  someGroupName6: yup.mixed().nullable().required('Campo requerido'),
});

const question7Schema = yup.object().shape({
  someGroupName7: yup.mixed().nullable().required('Campo requerido'),
});

const question8Schema = yup.object().shape({
  someGroupName8: yup.mixed().nullable().required('Campo requerido'),
  /* otros: yup.string().required('Campo requerido'), */
});

const IndexPage2 = () => {
  const [formStep, setFormStep] = useState(1);
  /* const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, touchedFields },    
  } = useForm({
    resolver: yupResolver(schema),
  }); */


  const forms = { 
    1: useForm(),
    2: useForm({ resolver: yupResolver(termsSchema) }),
    3: useForm({ resolver: yupResolver(personalDataSchema) }),
    4: useForm(),
    5: useForm({ resolver: yupResolver(question1Schema) }),
    6: useForm({ resolver: yupResolver(question2Schema) }),
    7: useForm({ resolver: yupResolver(question3Schema) }),
    8: useForm({ resolver: yupResolver(question4Schema) }),
    9: useForm({ resolver: yupResolver(question5Schema) }),
    10: useForm({ resolver: yupResolver(question6Schema) }),
    11: useForm({ resolver: yupResolver(question7Schema) }),
    12: useForm({ resolver: yupResolver(question8Schema) }),
    13: useForm(),
  };

  const handleNextStep = () => {
    setFormStep(cur => cur + 1);
  };

  const handleGoBackStep = () => {
    setFormStep(cur => cur - 1);
  };

  const onSubmit = (values, e) => {

    console.log('superchuspito');
    console.log(JSON.stringify(values, null, 2));
    if(formStep === 1){
      //information[1](data)
    }
    else if(formStep === 2){
      //account[1](data)
    }
    handleNextStep();
  };

  const onError = (errors, e) => {
    if(formStep >= 5) {
      message.destroy();
      message.error({
        content: 'Selecciona una opcion por favor',
        className: 'alert-error',
      });
    }
  };

  const getStepContent = (stepIndex) => {
    const formProps = forms[stepIndex];

    switch(stepIndex) {
      case 1:
        return {elem: <Welcome/>, formProps};
      case 2:
        return {elem: <Terms {...formProps}/>, formProps};
      case 3:
        return {elem: <PersonalData {...formProps}/>, formProps};
      case 4:
        return {elem: <EvaluationStart/>, formProps};
      case 5:
        return {elem: <Question1 {...formProps}/>, formProps};
      case 6:
        return {elem: <Question2 {...formProps}/>, formProps};
      case 7:
        return {elem: <Question3 {...formProps}/>, formProps};
      case 8:
        return {elem: <Question4 {...formProps}/>, formProps};
      case 9:
        return {elem: <Question5 {...formProps}/>, formProps};
      case 10:
        return {elem: <Question6 {...formProps}/>, formProps};
      case 11:
        return {elem: <Question7 {...formProps}/>, formProps};
      case 12:
        return {elem: <Question8 {...formProps}/>, formProps};
      case 13:
        return {elem: <ThankYou/>, formProps};
      default:
        return null;
    }
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);


  return (
    <div className="survey">
      <div  className='survey__body'>
        <form onSubmit={getStepContent(formStep).formProps.handleSubmit(onSubmit, onError)}>
          {getStepContent(formStep).elem}
          <SurveyFooter 
            formStep={formStep}
            handleGoBackStep={handleGoBackStep}
          />
        </form>
      </div>   
    </div>
  )
}

export default IndexPage2;