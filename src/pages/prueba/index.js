import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Divider, Button, Progress } from 'antd';

import './styles.scss';

const TOTAL_STEPS = 9;


const IndexPage = () => {
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

  return (
    <div className="survey">

      {formStep === 1 && (<div className='survey__header'>
        <h1 className='survey__header-title'>Encuesta de Nivel de Madurez en Gestión de Riesgos</h1>
        <p className='survey__header-text'>Desde RIMAC queremos ser tu aliado en la Gestión de riesgos empresarial (ERM). En esta encuesta buscamos medir el esfuerzo de tu empresa para conocer cuál es su Nivel de Madurez actual y sobre ello mejorar. Esta herramienta se encuentra basada en el Modelo de Madurez de Riesgo elaborado por Risk and Insurance Management Society, Inc. - RIMS.</p>
        <p className='survey__header-text'>Tu respuesta es muy valiosa para nosotros y con ella podremos construir nuevos servicios en ERM para tu organización.</p>
        <p className='survey__header-text'>*Si deseas más información sobre el Modelo de Riesgo de Madurez de RIMS haz click aquí: </p>
        <a className='survey__header-text survey__header-link' href='https://www.riskmaturitymodel.org/rims-risk-maturity-model-rmm-for-erm'  target="_blank" rel="noreferrer">https://www.riskmaturitymodel.org/rims-risk-maturity-model-rmm-for-erm/</a>
        <p className='survey__header-text'>Gracias.</p>
        <p className='survey__header-text survey__header-asterisk'>*Obligatorio</p>
      </div>)}
      
      {formStep === 2 && (
      <div className='survey__sub-header'>
        <h1 className='survey__sub-header-title'>Evaluación del nivel de madurez</h1>
        <p className='survey__header-text'>A continuación te presentamos 7 preguntas basadas en la Metodología RIMS.</p>
      </div>
      )}

      <div className='survey__body'>
        <Progress className='survey__progress' percent={percent} format={_ => `Página ${formStep} de ${TOTAL_STEPS}`}/>
        <Divider style={{ borderWidth: '1.5px'}} /> 
        <form onSubmit={handleSubmit(onSubmit)}>
          {formStep >= 1 && (
            <div className={`${formStep === 1 ? "block" : "hidden"} survey__question-container`}>
              <h4 className='survey__question-title'>¿Qué tipo de riesgos son los que evalúan en tu empresa? (Puedes marcar más de una opción)​ <span className='survey__asterisk'>*</span>​</h4>
              <div className='survey__answer'>
                <div className="icheck-material-blue">
                  <input type="checkbox" id="someCheckboxId1" {...register('someCheckboxId1')}/>
                  <label className='survey__answer-text' htmlFor="someCheckboxId1">Integral (Empresarial - incluye la gestión de riesgos de toda la organización)</label>
                </div>
                <div className="icheck-material-blue">
                  <input type="checkbox" id="someCheckboxId2" {...register('someCheckboxId2')}/>
                  <label className='survey__answer-text' htmlFor="someCheckboxId2">Estratégicos</label>
                </div>
                <div className="icheck-material-blue">
                  <input type="checkbox" id="someCheckboxId3" {...register('someCheckboxId3')}/>
                  <label className='survey__answer-text' htmlFor="someCheckboxId3">Finacieros</label>
                </div>                
                <div className="icheck-material-blue">
                  <input type="checkbox" id="someCheckboxId4" {...register('someCheckboxId4')}/>
                  <label className='survey__answer-text' htmlFor="someCheckboxId4">Operativos</label>
                </div>                
                <div className="icheck-material-blue">
                  <input type="checkbox" id="someCheckboxId5" {...register('someCheckboxId5')}/>
                  <label className='survey__answer-text' htmlFor="someCheckboxId5">Cumplimiento</label>
                </div>                
                <div className="icheck-material-blue">
                  <input type="checkbox" id="someCheckboxId6" {...register('someCheckboxId6')}/>
                  <label className='survey__answer-text' htmlFor="someCheckboxId6">Otros:</label>
                </div>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} /> 
              <h4 className='survey__question-title'>¿En que año se realizó la última actualización de los documentos de Gestión de Riesgos?​ <span className='survey__asterisk'>*</span>​</h4>
              <div className='survey__answer'>
                <div className="icheck-material-blue">
                  <input type="radio" id="someRadioId1" name="someGroupName2"  {...register('someGroupName2')}/>
                  <label className='survey__answer-text' htmlFor="someRadioId1">2021</label>
                </div>
                <div className="icheck-material-blue">
                  <input type="radio" id="someRadioId2" name="someGroupName2"  {...register('someGroupName2')}/>
                  <label className='survey__answer-text' htmlFor="someRadioId2">2020</label>
                </div>
                <div className="icheck-material-blue">
                  <input type="radio" id="someRadioId3" name="someGroupName2"  {...register('someGroupName2')}/>
                  <label className='survey__answer-text' htmlFor="someRadioId3">2019</label>
                </div>
                <div className="icheck-material-blue">
                  <input type="radio" id="someRadioId4" name="someGroupName2"  {...register('someGroupName2')}/>
                  <label className='survey__answer-text' htmlFor="someRadioId4">2018</label>
                </div>
                <div className="icheck-material-blue">
                  <input type="radio" id="someRadioId5" name="someGroupName2"  {...register('someGroupName2')}/>
                  <label className='survey__answer-text' htmlFor="someRadioId5">2017 o menos</label>
                </div>
                <div className="icheck-material-blue">
                  <input type="radio" id="someRadioId6" name="someGroupName2"  {...register('someGroupName2')}/>
                  <label className='survey__answer-text' htmlFor="someRadioId6">No hay documentación relacionada con Gestión de  Riesgos</label>
                </div>
              </div>
            </div>
          )}
          {formStep >= 2 && (
            <div className={`${formStep === 2 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>1. Adopción de una Gestión de Riesgos Empresarial​</h4>
                <p>Este atributo mide la cultura de riesgos de la organización y considera el grado de apoyo a nivel ejecutivo o de la alta dirección para la gestión de riesgos empresariales (ERM, por las siglas en inglés de Enterprise Risk Management).​</p>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span></h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId13" name="someGroupName3"  {...register('someGroupName3')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId13">a. La organización no ha reconocido la necesidad de tener un proceso de ERM.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId23" name="someGroupName3"  {...register('someGroupName3')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId23">b. La cultura organizacional tiene poco compromiso con la gestión de riesgos. La metodología de gestión de riesgos no está estandarizada dentro de la organización, cada área la trabaja de forma independiente. La gestión de riesgos está basada en eventos pasados.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId33" name="someGroupName3"  {...register('someGroupName3')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId33">c. La organización ha establecido  una política, un proceso estandarizado y un responsable para la gestión de riesgos empresariales. La gestión de riesgos considera riesgos futuros.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId43" name="someGroupName3"  {...register('someGroupName3')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId43">d. La alta dirección es consciente de la ERM. Los responsables de cada proceso asumen su riesgos y oportunidades y las reportan a la alta dirección. La gestión de riesgos crea y evalúa escenarios con visión futura.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId53" name="someGroupName3"  {...register('someGroupName3')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId53">e. Todos los niveles de la organización entienden los problemas de gestión de riesgos y llevan a cabo sus respectivos planes. La alta dirección espera que los riesgos sean tomados en cuenta para la toma de decisiones ante nuevas oportunidades. Los responsables de cada proceso asumen sus riesgos y oportunidades dentro de la planificación, con una comunicación frecuente y efectiva sobre riesgos.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId63" name="someGroupName3"  {...register('someGroupName3')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId63">f. La evaluación del riesgo es sistemática, está integrada en cada función empresarial y se mejora constantemente. El patrocinio de la alta dirección es fuerte y considera la gestión de riesgos para la toma de decisión diaria.​</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 3 && (
            <div className={`${formStep === 3 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>2. Descubriendo riesgos​</h4>
                <p>Este atributo mide la calidad y cobertura de penetración de las actividades de evaluación de riesgos en la documentación de riesgos y oportunidades.</p>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span>​</h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId14" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId14">a. La organización cree que conoce los riesgos más importantes a los que está expuesta, aunque probablemente exista poca documentación.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId24" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId24">b. La organización cuenta con un administrador de riesgos, que probablemente no cuenta con información real o actualizada.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId34" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId34">c. La gestión de riesgos incluye listas y discusiones sobre riesgos. Sin embargo, algunas áreas no comparten todos sus riesgos generando inconsistencias. Los indicadores de gestión de riesgos están basados en eventos pasados.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId44" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId44">d. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso desarrollan una lista de sus respectivos riesgos y los gestionan. La mitigación de riesgos está integrada con evaluaciones para monitorear su efectividad.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId54" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId54">e. La organización cuenta con criterios de evaluación de riesgos estandarizados. Los responsables de cada proceso gestionan constantemente una lista creciente de riesgos para luego evaluarlos.Los indicadores de riesgo críticos para sus áreas se revisan periódicamente en colaboración con el equipo de gestión de riesgos.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId64" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId64">f. Los responsables de cada área revisan y mejoran regularmente los indicadores de riesgo que se les adapta mejor. Una estructura de informes rutinaria y oportuna dirige los riesgos y las oportunidades a la alta dirección.</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 4 && (
            <div className={`${formStep === 4 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>3. Administración del proceso de ERM</h4>
                <p>Este atributo mide el grado en que la organización ha adoptado una metodología de ERM a lo largo de su cultura y utiliza los pasos del proceso ERM para identificar, evaluar, mitigar y monitorear riesgos.</p>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span></h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId14" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId14">a. Hay poco reconocimiento de la importancia del proceso de ERM.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId24" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId24">b. La gestión es reactiva y es posible que ERM todavía no se considere un proceso. Por ello, no existen criterios estándar de evaluación de riesgos. Los roles y responsabilidades de riesgo son informales o inexistentes.​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId34" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId34">c. La gerencia es consciente de la necesidad de un proceso de ERM. Por ello cuentan con funciones y responsabilidades definidas. La mitigación de riesgos puede identificarse, pero no suele ejecutarse.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId44" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId44">d. La organización cuenta con un proceso de ERM que se adapta a las necesidades de las áreas del negocio. Cuentan con un equipo de Riesgos Empresariales y la alta dirección revisa activamente los planes de riesgo.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId54" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId54">e. La organización cuenta con una política y un equipo de ERM. Asimismo, la gerencia desarrolla y revisa los reportes de riesgo, en los que miden el progreso de ERM para las partes interesadas, incluida la Junta Directiva.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId64" name="someGroupName4"  {...register('someGroupName4')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId64">f. La gestión de riesgos empresarial está integrada en todos los procesos y estrategias del negocio como una forma de alcanzar los objetivos. La organización utiliza un proceso de ERM que mejora la toma de decisiones y el desempeño.</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 5 && (
            <div className={`${formStep === 5 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>4. Apetito de la Gestión de Riesgos​</h4>
                <p>Este atributo evalúa el nivel de conciencia en la relación riesgo-oportunidad, la responsabilidad por el riesgo, la definición de tolerancias al riesgo y si la organización es eficaz para cerrar la brecha entre el riesgo potencial y el real.​</p>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span>​</h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId15" name="someGroupName5"  {...register('someGroupName5')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId15">a. La organización no ha formalizado su tolerancia ni apetito por el riesgo.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId25" name="someGroupName5"  {...register('someGroupName5')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId25">b. La gestión del riesgo carece de una visión estratégica enfocada en riesgos. Se administra de una de dos maneras: como una forma de evitar los riesgos y cumplir con la Normativa o como la transferencia del riesgo a través de un seguro.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId35" name="someGroupName5"  {...register('someGroupName5')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId35">c. Solo los líderes de alto nivel entienden la gestión de riesgos para tomar decisiones. Cada área tiene su forma de definir y comparar riesgos.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId45" name="someGroupName5"  {...register('someGroupName5')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId45">d. Los supuestos de riesgo dentro de las decisiones de gestión se comunican claramente. Los riesgos y oportunidades son identificados, evaluados y gestionados de forma rutinaria en línea con las tolerancias al riesgo. Se cuantifica la brecha entre la tolerancia objetivo y real.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId55" name="someGroupName5"  {...register('someGroupName5')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId55">e. El apetito por el riesgo se considera en cada paso del proceso de ERM. La organización pronostica los efectos potenciales de la mitigación planificada frente a la tolerancia al riesgo como parte del proceso de gestión de riesgos empresariales.​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId65" name="someGroupName5"  {...register('someGroupName5')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId65">f. El equipo de ERM define los niveles de tolerancia para todas las áreas. Un mecanismo compara e informa el riesgo evaluado real versus la tolerancia al riesgo. La gerencia prioriza la asignación de recursos en función de la brecha entre el apetito por el riesgo y el riesgo y la oportunidad evaluados.</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 6 && (
            <div className={`${formStep === 6 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>5. Disciplina de Causa Raíz​</h4>
                <p>Este atributo evalúa hasta qué punto una organización identifica el riesgo por fuente o causa raíz, en comparación con los síntomas y resultados que producen.</p>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span>​</h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId16" name="someGroupName6"  {...register('someGroupName6')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId16">a. Los efectos de eventos de riesgo pueden identificarse, pero no vincularse a objetivos.​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId26" name="someGroupName6"  {...register('someGroupName6')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId26">b. La frecuencia del riesgo no se rastrea ni conecta a un proceso. No rastrea formalmente las causas raíz en el proceso de gestión de riesgos.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId36" name="someGroupName6"  {...register('someGroupName6')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId36">c. La relación de causa y efecto no está definida en la organización. Existe conciencia de la importancia de un enfoque de causa raíz, pero no forma parte del marco de gestión de riesgos.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId46" name="someGroupName6"  {...register('someGroupName6')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId46">d. El enfoque de causa y efecto se entiende en la organización y es importante en cada paso del proceso de ERM. El marco de gestión de riesgos se organiza en torno a categorías de riesgo de causa raíz como personas internas, entorno externo, relaciones, sistemas y procesos.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId56" name="someGroupName6"  {...register('someGroupName6')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId56">e. Se identifican, miden y gestionan las causas, más que los resultados. Cada área recopila información de riesgo y desempeño para identificar dependencias y la frecuencia de los indicadores de causa raíz rutinariamente.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId66" name="someGroupName6"  {...register('someGroupName6')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId66">f. La organización utiliza eventos pasados propios o ajenos para definir categorías de causa raíz que le permitan prepararse para eventos futuros. La organización rastrea los eventos y la causa raíz al evaluar los costos-beneficios de las mejoras.​</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 7 && (
            <div className={`${formStep === 7 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>6. Resiliencia y sostenibilidad empresarial​</h4>
                <p>Este atributo evalúa la medida en que la continuidad del negocio, la planificación operativa y otras actividades de sostenibilidad se abordan con una metodología basada en riesgos.​</p>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span>​</h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId17" name="someGroupName7"  {...register('someGroupName7')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId17">a. La resiliencia y la sostenibilidad están orientados a recuperación de activos e infraestructura de TI.​​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId27" name="someGroupName7"  {...register('someGroupName7')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId27">b. La gerencia es consciente de los riesgos relacionados con la resiliencia y se centra en la infraestructura más que en el core del negocio. La respuesta a grandes eventos es reactiva. Las áreas de la organización no consideran las necesidades integrales del negocio para evitar riesgos.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId37" name="someGroupName7"  {...register('someGroupName7')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId37">c. La organización reconoce que la resiliencia es un tema que debe considerarse en cada paso del proceso de ERM, y no solo en la mitigación.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId47" name="someGroupName7"  {...register('someGroupName7')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId47">d. La resiliencia y la sostenibilidad se consideran en cada paso del proceso de ERM. Los riesgos de la organización incluyen geografía, tecnología disruptiva, competidores, liderazgo y cambios ambientales, con informes y control por parte de la alta dirección.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId57" name="someGroupName7"  {...register('someGroupName7')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId57">e. Un enfoque integral de la resiliencia considera los aspectos de las personas, externos, relaciones, sistemas y procesos. La resiliencia y la sostenibilidad son parte del proceso de ERM y la continuidad del negocio como mitigación.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId67" name="someGroupName7"  {...register('someGroupName7')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId67">f. Todos los temas se enmarcan en el contexto de la continuidad de los servicios a todas las partes interesadas. La sostenibilidad no es un estado final alcanzable; más bien, es característico de un sistema dinámico y en evolución.​</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formStep >= 8 && (
            <div className={`${formStep === 8 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>7. Gestión del desempeño​</h4>
                <p>Este atributo determina el grado en que una Organización ejecuta sus visiones y estrategia.​</p>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿Cuál es la opción que mejor se adapta a tu organización?​ <span className='survey__asterisk'>*</span>​</h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId18" name="someGroupName8"  {...register('someGroupName8')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId18">a. No existe un marco formal de indicadores y mediciones para las metas y la gestión de la Organización.​​​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId28" name="someGroupName8"  {...register('someGroupName8')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId28">b. Los objetivos estratégicos no están articulados con la primera línea de gerencia. Es posible que las decisiones para actuar sobre los riesgos no se rastreen ni se controlen de manera sistemática.​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId38" name="someGroupName8"  {...register('someGroupName8')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId38">c. El proceso de gestión de riesgos empresariales es independiente de la estrategia y la planificación.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId48" name="someGroupName8"  {...register('someGroupName8')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId48">d. Los criterios de gestión de riesgos son parte de la gestión evaluaciones de desempeño. Los colaboradores comprenden cómo el enfoque basado en el riesgo les ayuda a alcanzar sus metas.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId58" name="someGroupName8"  {...register('someGroupName8')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId58">e. Los riesgos son altamente considerados como parte de planificación estratégica. Los empleados de todos los niveles utilizan un enfoque basado en el riesgo para lograr los objetivos.​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId68" name="someGroupName8"  {...register('someGroupName8')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId68">f. La evaluación y medición de la mejora del desempeño es parte de la cultura del riesgo. La organización mide la efectividad de gestionar las incertidumbres y aprovechar las oportunidades de riesgo con un enfoque claro, conciso, eficaz y comunicacional.​​</label>
                  </div>
                </div>               
              </div>
            </div>
          )}
          {formStep >= 9 && (
            <div className={`${formStep === 9 ? "block" : "hidden"} survey__question-container`}>
              <div className='survey__description-question'>
                <h4>Nos gustaría escucharte</h4>
              </div>
              <Divider style={{ borderWidth: '1.5px'}} />
              <div className='survey__question'>
                <h4 className='survey__question-title'>¿En cuál de los siguientes atributos recomendados por RIMS te gustaría recibir servicios como valor agregado de Rimac?​ <span className='survey__asterisk'>*</span>​</h4>
                <div className='survey__answer'>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId19" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId19">Atributo 1: Adopción de una Gestión de Riesgos Empresarial: mide la cultura de riesgos de la organización y considera el grado de apoyo de la alta dirección.​​​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId29" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId29">Atributo 2: Descubriendo riesgos: mide la calidad y alcance en la documentación de actividades de evaluación de riesgos y oportunidades.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId39" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId39">Atributo 3: Administración del proceso de ERM: mide el grado de implementación y concientización en una metodología de ERM</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId49" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId49">Atributo 4: Apetito de la Gestión de Riesgos: evalúa el nivel de conciencia en la relación riesgo-oportunidad, la tolerancias al riesgo y si la organización es eficaz para cerrar la brecha entre el riesgo potencial y el real.​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId59" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId59">Atributo 5: Disciplina de causa raíz: evalúa hasta qué punto una organización identifica el riesgo por fuente o causa raíz.​​</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId69" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId69">Atributo 6: Resiliencia y sostenibilidad empresarial: evalúa la medida en que la continuidad del negocio, la planificación operativa y la sostenibilidad se abordan con una metodología basada en riesgos.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId69" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId69">Atributo 7: Gestión del desempeño: determina el grado en que una Organización ejecuta sus visiones y estrategia.</label>
                  </div>
                  <div className="icheck-material-blue">
                    <input type="radio" id="someRadioId69" name="someGroupName9"  {...register('someGroupName9')}/>
                    <label className='survey__answer-text' htmlFor="someRadioId69">Otros:</label>
                  </div>
                </div> 
              </div>
            </div>
          )}
          <Divider style={{ borderWidth: '1.5px'}} />
          {formStep > 1 && (<Button className='survey__button' htmlType='button' type="primary" onClick={handleGoBackToPreviousStep}>Atrás</Button>)}
          {formStep < 9 && (<Button className='survey__button' htmlType='button' type="primary" onClick={handleStepCompletion}>Siguiente</Button>)}
          {formStep >= 9 && (<Button className='survey__button' htmlType='submit' type="primary" danger>Enviar</Button>)}
          {/* <pre>
            {JSON.stringify(watch(), null, 2)}
          </pre> */}
        </form>
      </div>
    </div>
  )
}

export default IndexPage