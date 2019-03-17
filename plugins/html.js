import { createFilter } from 'rollup-pluginutils';

export default (include = '**/*.html', exclude) => {
  const filter = createFilter(include, exclude);

  return {
    name: 'html',

    transform(code, id) {
      if (!filter(id)) return;

      return {
        code: `export default ${JSON.stringify(code)};`,
        map: { mappings: '' },
      };
    },
  };
};
