from scipy import *
from numpy.linalg import norm
from math import sqrt, sin, cos
import pandas as pd
import numpy as np
from numpy import arange, array, ones, linalg
import random


def randSampleList(sampleSize, minVal, maxVal):
    samples = []
    for i in range(sampleSize):
        samples.append(random.uniform(minVal, maxVal))
    return samples


def MinMax_Mean_MSE(a, b):
    # inputs: bounds for uniform distribution a and b
    # sample size is 10
    # number of experiments is 100,000
    # output: MSE for sample mean estimator with sample size 10
    trials = 1
    sampleSize = 10
    sumDifSquare = float(0)
    for i in range(trials):
        sampleList = randSampleList(sampleSize, a, b)
        print(sampleList)
        print((max(sampleList)+min(sampleList))/2)
        print(((a+b)/2))
        sumDifSquare += ((max(sampleList)+min(sampleList))/2 - ((a+b)/2)) ** 2
    return sumDifSquare / trials


print(MinMax_Mean_MSE(-5, 5))
