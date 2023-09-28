const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Before the module.exports statement
const createDistDirectory = () => {
  const distAssetsPath = path.resolve(__dirname, 'dist/assets');
  if (!fs.existsSync(distAssetsPath)) {
    fs.mkdirSync(distAssetsPath, { recursive: true });
  }
};

createDistDirectory();

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      lang: 'en',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        apiInterface: {
          test: /[\\/]api_interface[\\/]/,
          name: 'api_interface',
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
        imperialMetricSwitch: {
          test: /[\\/]imperial_metric_switch[\\/]/,
          name: 'imperial_metric_switch',
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
      },
    },
    runtimeChunk: 'single',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    fallback: {
      api_interface: require.resolve('./src/components/api_interface.js'),
    },
  },
};
