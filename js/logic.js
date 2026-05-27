function normalizedTemp(temp){
    // 0 = balls are freezing off(-20°c), 1 = can cook eggs on concrete(40°c)
    return Math.max(0, Math.min(1,(temp+20)/60))
}

function normalizedRain(precipitation){
    return Math.max(0,Math.min(1,precipitation/20))
}

function normalizedWind(wind){
    return Math.max(0,Math.min(wind/80))
}

function normalizedHumidity(humidity){
    return humidity/100
}

class WeatherClusteringEngine{
    constructor(kValue){
        this.k = kValue
        this.centroids = []
        this.clusterlabels ={};

    }

    initCentroids(){
        this.centroids = []
        for (let i = 0; i < this.k; i++){
            const randomVector =[
                Math.random(),
                Math.random(),
                Math.random(),
                Math.random(),
            ];
            this.centroids.push(randomVector)
        }
    }
    
    calculateDistance(v1, v2) {
        return Math.sqrt(
            v1.reduce((sum, val, i) => sum + Math.pow(val - v2[i], 2), 0)
        );
    }

    fit(trainingData, iterations = 15){
        this.initCentroids();

        for (let step = 0; step < iterations; step++){
            //place into buckets
        }
    }
    predict(liveWeatherVector){
        let closestIndex = 0
        let shortestDistance = Infinity

        //loop through centroids

        return closestIndex
    }
}