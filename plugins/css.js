import { createFilter } from 'rollup-pluginutils';
import postcssrc from 'postcss-load-config';
import postcss from 'postcss';

const ctx = {
  production: !process.env.ROLLUP_WATCH,
};

export default (include = '**/*.css', exclude) => {
  const filter = createFilter(include, exclude);

  return {
    name: 'css',

    async transform(code, id) {
      if (!filter(id)) return;

      return await postcssrc(ctx).then(({ plugins, options }) =>
        postcss(plugins)
          .process(code, {
            ...options,
            from: id,
          })
          .then(({ css }) => ({
            code: `export default ${JSON.stringify(css)};`,
            map: { mappings: '' },
          })),
      );
    },
  };
};
