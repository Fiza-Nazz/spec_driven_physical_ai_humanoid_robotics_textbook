// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro', // Direct link to the top-level intro.md

    {
      type: 'category',
      label: 'Core Chapters',
      link: {
        type: 'generated-index',
        title: 'Core Humanoid Robotics Chapters',
        description: 'Fundamental concepts and advanced topics in Humanoid Robotics.',
        slug: '/category/core-chapters',
      },
      items: [
        'chapters/intro/index',
        'chapters/kinematics/index',
        'chapters/sensing-perception/index',
        'chapters/control-navigation/index',
        'chapters/hri/index',
        'chapters/advanced-future/index',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Basics',
      link: {
        type: 'generated-index',
        title: 'Tutorial Basics',
        description: 'Learn the basics of Docusaurus.',
        slug: '/category/tutorial-basics',
      },
      items: [
        'tutorial-basics/congratulations',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/markdown-features',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      link: {
        type: 'generated-index',
        title: 'Tutorial Extras',
        description: 'Advanced Docusaurus features.',
        slug: '/category/tutorial-extras',
      },
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};

export default sidebars;
