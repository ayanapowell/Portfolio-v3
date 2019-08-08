const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/Project.js');
    resolve(
      graphql(`
        {
          allContentfulWork {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allContentfulWork.edges.forEach(project => {
          createPage({
            path: `project/${project.node.slug}`,
            component: projectTemplate,
            context: {
              slug: project.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};
