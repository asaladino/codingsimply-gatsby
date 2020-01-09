---
layout: project
title: 'Calc ML'
author: 'Adam'
created: '2019-05-09 19:55:31'
tags: ["python","tensorflow"]
slug: 'calc-ml'
git_url: 'https://github.com/asaladino/calc-ml'
icon_url: 'undefined'
readme_md: 'https://raw.githubusercontent.com/asaladino/calc-ml/master/README.md'
screenshots: []
---


I am studying neural networks and was wondering if arithmetic be learned. Apparently it can. I tried a few different methods with varying results.

## Different Methods

I'm trying various methods to achieve a solution.

1. Straight tensorflow multi-layered perceptron (MLP).
2. Keras multi-layered perceptron (MLP).
3. Keras Long Short-Term Memory (LSTM).
4. Keras classifier with one hot encoding. This solution seems to work best and is the most flexible. Checkout a [deployed implementation](http://calc.codingsimply.com) created with react.js and tensorflow.js.

I referenced and copied much of the article [Learn to Add Numbers with an Encoder-Decoder LSTM Recurrent Neural Network](https://machinelearningmastery.com/learn-add-numbers-seq2seq-recurrent-neural-networks/) by [Jason Brownlee](https://machinelearningmastery.com/).
