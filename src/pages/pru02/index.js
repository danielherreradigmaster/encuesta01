import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Progress, Space } from 'antd';

import LogoRimac from '../../assets/img/logo-rimac.png';
import DatosPersonales from '../../assets/img/datos-personales.png';
import './styles.scss';

const TOTAL_STEPS = 9;


const IndexPage2 = () => {
  const [formStep, setFormStep] = useState(1);
  const [percent, setPercent] = useState((1/TOTAL_STEPS)*100);
  const {
    register,
    watch,
    handleSubmit,
  } = useForm({
    mode: "onChange",
  })

  const handleStepCompletion = () => {
    setFormStep(cur => cur + 1);
    setPercent(_ => (formStep/TOTAL_STEPS)*100);
  }

  const handleGoBackToPreviousStep = () => {
    setFormStep(cur => cur - 1);
    setPercent(_ => (formStep/TOTAL_STEPS)*100);
  }

  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2))
    //handleStepCompletion()
  }

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);


  return (
    <div className="survey">
      <div  className='survey__body'>
        {formStep === 1 && (
          <div className='welcome'>
            <img className='welcome__img' src={LogoRimac} alt=''/>
            <h2 className='welcome__title'>Encuesta de Nivel de Madurez en Gestión de Riesgos</h2>
            <p className='welcome__description'>
              <span>Desde RIMAC queremos ser tu aliado en la Gestión de Riesgos Empresarial - ERM. Con esta encuesta podrás conocer el Nivel de Madurez de tu empresa. Esta herramienta se encuentra basada en el Modelo de Madurez de Riesgo elaborado por Risk and Insurance Management Society, Inc. - RIMS.</span>
              <br/><br/>
              <span>Tu respuesta es muy valiosa y con ella podremos brindarte servicios acorde a tus necesidades.</span>
              <br/>
              <span>Gracias.</span>
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {formStep >= 2 && (
            <div className={`${formStep === 2 ? "block" : "hidden"} personal-data`}>
              <div className='personal-data__container-img'>
                <img className='personal-data__img' src={DatosPersonales} alt=''/>
              </div>
              <div className='personal-data__container'>
                <h4 className='personal-data__title'>Datos Personales</h4>
                <p className='personal-data__description'>En Rimac velamos por proteger la información de nuestros clientes, respetando la confidencialidad de sus datos. Ten por seguro que la información reunida será únicamente utilizada para mejorar nuestros servicios en Gestión de Riesgos:​</p>         
                
                
                <div className="control-checkbox">
                  <input className='control-checkbox__checkbox' id="checkboxName1" type="checkbox"/>
                  <label className='control-checkbox__label' htmlFor="checkboxName1">He leído y acepto los términos y condiciones de uso He leído y acepto los términos y condiciones de uso He leído y acepto los términos y condiciones de uso</label>
                </div>
                <div className="control-checkbox">
                  <input className='control-checkbox__checkbox' id="checkboxName2" type="checkbox"/>
                  <label className='control-checkbox__label' htmlFor="checkboxName2">He leído y acepto los términos y condiciones de uso</label>
                </div>


              </div>
            </div>
          )}
          {formStep >= 3 && (
            <div className={`${formStep === 3 ? "block" : "hidden"} personal-data`}>
              <div className='personal-data__container-img'>
                <img className='personal-data__img' src={DatosPersonales} alt=''/>
              </div>
              <div className='personal-data__container'>

                <div className="control-input">
                  <input className='control-input__input' type="text" id='email' name="email" autoComplete="off" required/>
                  <label htmlFor="email" className="control-input__label">
                    <span className="control-input__content-name">
                      Correo electrónico
                    </span>
                  </label>
                </div>

                <div className="control-input">
                  <input className='control-input__input' type="text" id='fullname' name="fullname" autoComplete="off" required/>
                  <label htmlFor="fullname" className="control-input__label">
                    <span className="control-input__content-name">
                      Nombres y Apellidos
                    </span>
                  </label>
                </div>

                <div className="control-input">
                  <input className='control-input__input' type="text" id='company' name="company" autoComplete="off" required/>
                  <label htmlFor="company" className="control-input__label">
                    <span className="control-input__content-name">
                      Empresa 
                    </span>
                  </label>
                </div>

                <div className="control-input">
                  <input className='control-input__input' type="text" id='position' name="position" autoComplete="off" required/>
                  <label htmlFor="position" className="control-input__label">
                    <span className="control-input__content-name">
                      Cargo
                    </span>
                  </label>
                </div>


              </div>
            </div>
          )}
          {formStep >= 4 && (
            <div className={`${formStep === 4 ? "flex" : "hidden"} evaluation-start`}>
              <div className='evaluation-start__content'>
                <h1 className='evaluation-start__title'>Evaluación del nivel de madurez</h1>
                <p className='evaluation-start__description'>A continuación te presentamos 7 preguntas para que puedas conocer tu nivel de madurez según la Metodología de RIMS.</p>
              </div>
            </div>
          )}
          {formStep >= 5 && (
            <div className={`${formStep === 5 ? "block" : "hidden"} question`}>
              <div className='question__container'>
                <div className='question__header'>
                  <Alert className='question__header-title1' message="1. Adopción de una Gestión de Riesgos Empresarial" type="error" />
                  <p className='question__header-content'>Este atributo mide la cultura de riesgos de la organización y considera el grado de apoyo a nivel ejecutivo o de la alta dirección para la gestión de riesgos empresariales (ERM, por las siglas en inglés de Enterprise Risk Management).​</p>
                  <h4 className='question__name'>¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?​ <span className='survey__asterisk'>*</span></h4>
                </div>
                <div className='question__body'>
                  <div className='question__answer'>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId11" name="someGroupName1"  />
                      <label className='survey__answer-text' htmlFor="someRadioId11">a. La organización no ha reconocido la necesidad de tener un proceso de ERM.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId21" name="someGroupName1"  />
                      <label className='survey__answer-text' htmlFor="someRadioId21">b. La cultura organizacional tiene poco compromiso con la gestión de riesgos. La metodología de gestión de riesgos no está estandarizada dentro de la organización, cada área la trabaja de forma independiente. La gestión de riesgos está basada en eventos pasados.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId31" name="someGroupName1"  />
                      <label className='survey__answer-text' htmlFor="someRadioId31">c. La organización ha establecido  una política, un proceso estandarizado y un responsable para la gestión de riesgos empresariales. La gestión de riesgos considera riesgos futuros.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId41" name="someGroupName1"  />
                      <label className='survey__answer-text' htmlFor="someRadioId41">d. La alta dirección es consciente de la ERM. Los responsables de cada proceso asumen su riesgos y oportunidades y las reportan a la alta dirección. La gestión de riesgos crea y evalúa escenarios con visión futura.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId51" name="someGroupName1"  />
                      <label className='survey__answer-text' htmlFor="someRadioId51">e. Todos los niveles de la organización entienden los problemas de gestión de riesgos y llevan a cabo sus respectivos planes. La alta dirección espera que los riesgos sean tomados en cuenta para la toma de decisiones ante nuevas oportunidades. Los responsables de cada proceso asumen sus riesgos y oportunidades dentro de la planificación, con una comunicación frecuente y efectiva sobre riesgos.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId61" name="someGroupName1"  />
                      <label className='survey__answer-text' htmlFor="someRadioId61">f. La evaluación del riesgo es sistemática, está integrada en cada función empresarial y se mejora constantemente. El patrocinio de la alta dirección es fuerte y considera la gestión de riesgos para la toma de decisión diaria.​</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 6 && (
            <div className={`${formStep === 6 ? "block" : "hidden"} question`}>
              <div className='question__container'>
                <div className='question__header'>
                  <h4 className='question__header-title'>2. Descubriendo riesgos​</h4>
                  <p className='question__header-content'>Este atributo mide la calidad y cobertura de penetración de las actividades de evaluación de riesgos en la documentación de riesgos y oportunidades.​</p>
                </div>
                <div className='question__body'>
                  <h4 className='question__name'>¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?​ <span className='survey__asterisk'>*</span></h4>
                  <div className='question__answer'>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId12" name="someGroupName2"  {...register('someGroupName2')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId12">a. La organización cree que conoce los riesgos más importantes a los que está expuesta, aunque probablemente exista poca documentación.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId22" name="someGroupName2"  {...register('someGroupName2')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId22">b. La organización cuenta con un administrador de riesgos, que probablemente no cuenta con información real o actualizada.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId32" name="someGroupName2"  {...register('someGroupName2')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId32">c. La gestión de riesgos incluye listas y discusiones sobre riesgos. Sin embargo, algunas áreas no comparten todos sus riesgos generando inconsistencias. Los indicadores de gestión de riesgos están basados en eventos pasados.</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId42" name="someGroupName2"  {...register('someGroupName2')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId42">d. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso desarrollan una lista de sus respectivos riesgos y los gestionan. La mitigación de riesgos está integrada con evaluaciones para monitorear su efectividad.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId52" name="someGroupName2"  {...register('someGroupName2')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId52">e. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso gestionan constantemente una lista creciente de riesgos para luego evaluarlos.Los indicadores de riesgo críticos para sus áreas se revisan periódicamente en colaboración con el equipo de gestión de riesgos.</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId62" name="someGroupName2"  {...register('someGroupName2')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId62">f. Los responsables de cada área revisan y mejoran regularmente los indicadores de riesgo que se les adapta mejor. Una estructura de informes rutinaria y oportuna dirige los riesgos y las oportunidades a la alta dirección.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 7 && (
            <div className={`${formStep === 7 ? "block" : "hidden"} question`}>
              <div className='question__container'>
                <div className='question__header'>
                  <h4 className='question__header-title'>3. Administración del proceso de ERM​</h4>
                  <p className='question__header-content'>Este atributo mide el grado en que la organización ha adoptado una metodología de ERM a lo largo de su cultura y utiliza los pasos del proceso ERM para identificar, evaluar, mitigar y monitorear riesgos.</p>
                </div>
                <div className='question__body'>
                  <h4 className='question__name'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span></h4>
                  <div className='question__answer'>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId13" name="someGroupName3"  {...register('someGroupName3')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId13">a. Hay poco reconocimiento de la importancia del proceso de ERM.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId23" name="someGroupName3"  {...register('someGroupName3')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId23">b. La gestión es reactiva y es posible que ERM todavía no se considere un proceso. Por ello, no existen criterios estándar de evaluación de riesgos. Los roles y responsabilidades de riesgo son informales o inexistentes.​​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId33" name="someGroupName3"  {...register('someGroupName3')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId33">c. La gerencia es consciente de la necesidad de un proceso de ERM. Por ello cuentan con funciones y responsabilidades definidas. La mitigación de riesgos puede identificarse, pero no suele ejecutarse.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId43" name="someGroupName3"  {...register('someGroupName3')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId43">d. La organización cuenta con un proceso de ERM que se adapta a las necesidades de las áreas del negocio. Cuentan con un equipo de Riesgos Empresariales y la alta dirección revisa activamente los planes de riesgo.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId53" name="someGroupName3"  {...register('someGroupName3')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId53">e. La organización cuenta con una política y un equipo de ERM. Asimismo, la gerencia desarrolla y revisa los reportes de riesgo, en los que miden el progreso de ERM para las partes interesadas, incluida la Junta Directiva.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId63" name="someGroupName3"  {...register('someGroupName3')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId63">f. La gestión de riesgos empresarial está integrada en todos los procesos y estrategias del negocio como una forma de alcanzar los objetivos. La organización utiliza un proceso de ERM que mejora la toma de decisiones y el desempeño.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 8 && (
            <div className={`${formStep === 8 ? "block" : "hidden"} question`}>
              <div className='question__container'>
                <div className='question__header'>
                  <h4 className='question__header-title'>4. Apetito de la Gestión de Riesgos​</h4>
                  <p className='question__header-content'>Este atributo evalúa el nivel de conciencia en la relación riesgo-oportunidad, la responsabilidad por el riesgo, la definición de tolerancias al riesgo y si la organización es eficaz para cerrar la brecha entre el riesgo potencial y el real.​​</p>
                </div>
                <div className='question__body'>
                  <h4 className='question__name'>¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?​ <span className='survey__asterisk'>*</span></h4>
                  <div className='question__answer'>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId14" name="someGroupName4"  {...register('someGroupName4')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId14">a. La organización no ha formalizado su tolerancia ni apetito por el riesgo.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId24" name="someGroupName4"  {...register('someGroupName4')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId24">b. La gestión del riesgo carece de una visión estratégica enfocada en riesgos. Se administra de una de dos maneras: como una forma de evitar los riesgos y cumplir con la Normativa o como la transferencia del riesgo a través de un seguro.</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId34" name="someGroupName4"  {...register('someGroupName4')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId34">c. Solo los líderes de alto nivel entienden la gestión de riesgos para tomar decisiones. Cada área tiene su forma de definir y comparar riesgos.</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId44" name="someGroupName4"  {...register('someGroupName4')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId44">d. Los supuestos de riesgo dentro de las decisiones de gestión se comunican claramente. Los riesgos y oportunidades son identificados, evaluados y gestionados de forma rutinaria en línea con las tolerancias al riesgo. Se cuantifica la brecha entre la tolerancia objetivo y real.</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId54" name="someGroupName4"  {...register('someGroupName4')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId54">e. El apetito por el riesgo se considera en cada paso del proceso de ERM. La organización pronostica los efectos potenciales de la mitigación planificada frente a la tolerancia al riesgo como parte del proceso de gestión de riesgos empresariales.​​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId64" name="someGroupName4"  {...register('someGroupName4')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId64">f. El equipo de ERM define los niveles de tolerancia para todas las áreas. Un mecanismo compara e informa el riesgo evaluado real versus la tolerancia al riesgo. La gerencia prioriza la asignación de recursos en función de la brecha entre el apetito por el riesgo y el riesgo y la oportunidad evaluados.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 9 && (
            <div className={`${formStep === 9 ? "block" : "hidden"} question`}>
              <div className='question__container'>
                <div className='question__header'>
                  <h4 className='question__header-title'>5. Disciplina de Causa Raíz​</h4>
                  <p className='question__header-content'>Este atributo evalúa hasta qué punto una organización identifica el riesgo por fuente o causa raíz, en comparación con los síntomas y resultados que producen.​​</p>
                </div>
                <div className='question__body'>
                  <h4 className='question__name'>¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?​ <span className='survey__asterisk'>*</span></h4>
                  <div className='question__answer'>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId15" name="someGroupName5"  {...register('someGroupName5')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId15">a. Los efectos de eventos de riesgo pueden identificarse, pero no vincularse a objetivos.​​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId25" name="someGroupName5"  {...register('someGroupName5')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId25">b. La frecuencia del riesgo no se rastrea ni conecta a un proceso. No rastrea formalmente las causas raíz en el proceso de gestión de riesgos.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId35" name="someGroupName5"  {...register('someGroupName5')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId35">c. La relación de causa y efecto no está definida en la organización. Existe conciencia de la importancia de un enfoque de causa raíz, pero no forma parte del marco de gestión de riesgos.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId45" name="someGroupName5"  {...register('someGroupName5')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId45">d. El enfoque de causa y efecto se entiende en la organización y es importante en cada paso del proceso de ERM. El marco de gestión de riesgos se organiza en torno a categorías de riesgo de causa raíz como personas internas, entorno externo, relaciones, sistemas y procesos.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId55" name="someGroupName5"  {...register('someGroupName5')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId55">e. Se identifican, miden y gestionan las causas, más que los resultados. Cada área recopila información de riesgo y desempeño para identificar dependencias y la frecuencia de los indicadores de causa raíz rutinariamente.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId65" name="someGroupName5"  {...register('someGroupName5')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId65">f. La organización utiliza eventos pasados propios o ajenos para definir categorías de causa raíz que le permitan prepararse para eventos futuros. La organización rastrea los eventos y la causa raíz al evaluar los costos-beneficios de las mejoras.​</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 10 && (
            <div className={`${formStep === 10 ? "block" : "hidden"} question`}>
              <div className='question__container'>
                <div className='question__header'>
                  <h4 className='question__header-title'>6. Resiliencia y sostenibilidad empresarial​</h4>
                  <p className='question__header-content'>Este atributo evalúa la medida en que la continuidad del negocio, la planificación operativa y otras actividades de sostenibilidad se abordan con una metodología basada en riesgos.​</p>
                </div>
                <div className='question__body'>
                  <h4 className='question__name'>¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?​ <span className='survey__asterisk'>*</span></h4>
                  <div className='question__answer'>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId16" name="someGroupName6"  {...register('someGroupName6')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId16">a. La resiliencia y la sostenibilidad están orientados a recuperación de activos e infraestructura de TI.​​​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId26" name="someGroupName6"  {...register('someGroupName6')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId26">b. La gerencia es consciente de los riesgos relacionados con la resiliencia y se centra en la infraestructura más que en el core del negocio. La respuesta a grandes eventos es reactiva. Las áreas de la organización no consideran las necesidades integrales del negocio para evitar riesgos.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId36" name="someGroupName6"  {...register('someGroupName6')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId36">c. La organización reconoce que la resiliencia es un tema que debe considerarse en cada paso del proceso de ERM, y no solo en la mitigación.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId46" name="someGroupName6"  {...register('someGroupName6')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId46">d. La resiliencia y la sostenibilidad se consideran en cada paso del proceso de ERM. Los riesgos de la organización incluyen geografía, tecnología disruptiva, competidores, liderazgo y cambios ambientales, con informes y control por parte de la alta dirección.</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId56" name="someGroupName6"  {...register('someGroupName6')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId56">e. Un enfoque integral de la resiliencia considera los aspectos de las personas, externos, relaciones, sistemas y procesos. La resiliencia y la sostenibilidad son parte del proceso de ERM y la continuidad del negocio como mitigación.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId66" name="someGroupName6"  {...register('someGroupName6')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId66">f. Todos los temas se enmarcan en el contexto de la continuidad de los servicios a todas las partes interesadas. La sostenibilidad no es un estado final alcanzable; más bien, es característico de un sistema dinámico y en evolución.​</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 11 && (
            <div className={`${formStep === 11 ? "block" : "hidden"} question`}>
              <div className='question__container'>
                <div className='question__header'>
                  <h4 className='question__header-title'>7. Gestión del desempeño</h4>
                  <p className='question__header-content'>Este atributo determina el grado en que una Organización ejecuta sus visiones y estrategia.​​</p>
                </div>
                <div className='question__body'>
                  <h4 className='question__name'>¿Cuál es la opción que mejor se adapta a tu organización respecto a la adopción de una Gestión de Riesgos Empresarial​?​ <span className='survey__asterisk'>*</span></h4>
                  <div className='question__answer'>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId17" name="someGroupName7"  {...register('someGroupName7')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId17">a. No existe un marco formal de indicadores y mediciones para las metas y la gestión de la Organización.​​​​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId27" name="someGroupName7"  {...register('someGroupName7')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId27">b. Los objetivos estratégicos no están articulados con la primera línea de gerencia. Es posible que las decisiones para actuar sobre los riesgos no se rastreen ni se controlen de manera sistemática.​​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId37" name="someGroupName7"  {...register('someGroupName7')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId37">c. El proceso de gestión de riesgos empresariales es independiente de la estrategia y la planificación.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId47" name="someGroupName7"  {...register('someGroupName7')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId47">d. Los criterios de gestión de riesgos son parte de la gestión evaluaciones de desempeño. Los colaboradores comprenden cómo el enfoque basado en el riesgo les ayuda a alcanzar sus metas.​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId57" name="someGroupName7"  {...register('someGroupName7')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId57">e. Los riesgos son altamente considerados como parte de planificación estratégica. Los empleados de todos los niveles utilizan un enfoque basado en el riesgo para lograr los objetivos.​​</label>
                    </div>
                    <div className="question__input-group">
                      <input type="radio" id="someRadioId67" name="someGroupName7"  {...register('someGroupName7')}/>
                      <label className='survey__answer-text' htmlFor="someRadioId67">f. La evaluación y medición de la mejora del desempeño es parte de la cultura del riesgo. La organización mide la efectividad de gestionar las incertidumbres y aprovechar las oportunidades de riesgo con un enfoque claro, conciso, eficaz y comunicacional.​​</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>



      
      <div className={`footer footer--${formStep === 1 ? "start" : "accept"}`}>
        {formStep === 1 && (<Button className='footer__button--start' type="primary" size='large' htmlType='button' block onClick={handleStepCompletion}>Comenzar</Button>)}
        {formStep >=2 && (
          <>
            <Space size='small'>
              <Button className='footer__button--accept' type="primary" htmlType='button' onClick={handleGoBackToPreviousStep}>Atrás</Button>
              <Button className='footer__button--accept' type="primary" htmlType='button' onClick={handleStepCompletion}>Siguiente</Button>
            </Space>
            <img className='footer__img' src={LogoRimac} alt='' height='34px' />
          </>
        )}
      </div>
    </div>
  )
}

export default IndexPage2;