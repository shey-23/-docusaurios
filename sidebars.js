// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Patrones de Comportamiento',
      items: [
      'patrones_de_diseño/observer',
      'patrones_de_diseño/strategy',
      'patrones_de_diseño/command',
      'patrones_de_diseño/state',
      'patrones_de_diseño/template-method',
      'patrones_de_diseño/visitor',
      ]
    },
  ],
   
  
};

export default sidebars;
