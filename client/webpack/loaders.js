const ExtractTextPlugin = require('extract-text-webpack-plugin');


const BUILD = process.env.NODE_ENV;

function babelLoader() {
  return {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      cacheDirectory: true,
    },
  };
}

function cssLoader() {
  if (['development'].includes(BUILD)) {
    return {
          test: /\.s?css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    require('autoprefixer'),
                    require('postcss-reporter'),
                  ];
                },
              },
            },
            'sass-loader',
          ],
        };
  } else if (['production'].includes(BUILD)) {
    return {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    require('autoprefixer'),
                    require('postcss-reporter'),
                  ];
                },
              },
            },
          ],
        }),
        exclude: '/node_modules/',
      };
  }
}

function urlLoaders() {
  return [
    {
      test: /\.woff(\d+|\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
    }
  ]
}

function fileLoaders() {
  return [
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
    },
    {
      test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.jpe?g$|\.gif$|\.png$/i,
      loader: 'file-loader?name=[path][name].[ext]',
      exclude: /node_modules/,
    }
  ];
}


module.exports = () => {
  return {
    module: {
      rules: [
        babelLoader(),
        cssLoader(),
        ...fileLoaders(),
        ...urlLoaders(),
      ]
    }
  }
}
