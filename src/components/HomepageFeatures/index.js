import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Patrones de diseño',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explora diferentes patrones de diseño como <strong>Strategy</strong>, <strong>Observer</strong> y <strong>Command</strong>.
        Aprende cómo pueden ayudarte a resolver problemas comunes en desarrollo de software.
      </>
    ),


  },
  {
    title: 'Diseñado en Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Fácil de instalar y utilizar, permitiéndote poner tu sitio web en línea rápidamente
      </>
    ),
  },
  {
    title: 'Utilizacion de React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Una poca personalizacion con react
      </>
      
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        
      </div>
      
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
