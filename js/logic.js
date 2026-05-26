function normalizedTemp(temp){
    // 0 = balls are freezing off(-20°c), 1 = can cook eggs on concrete(40°c)
    return Math.max(0, Math.min(1,(temp+20)/60))
}

function normalizedRain(perc){
    
}