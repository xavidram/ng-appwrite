'use strict';

const tailwindWebpackRule = {
  test: /\.scss$/,
  use: ['postcss-loader']
};

const svgWebpackRule = {
  test: /\.svg$/,
  use: ['@svgr/webpack', 'url-loader']
}

exports.tailwindWebpackRule = tailwindWebpackRule;
exports.svgWebpackRule = svgWebpackRule;