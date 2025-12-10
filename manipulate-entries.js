const filterEntries = (obj, func) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => func([key, value])))                                                                                                                                                                                                                                                                                                                                                                                                        

const mapEntries = (obj, func) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [func([key, value])[0], func([key, value])[1]]))

const reduceEntries = (obj, func, value) => {
    if (value !== undefined) {
        for (let key of Object.entries(obj)) {
            value = func(value, key)
        }
    }
    return value
}

const totalCalories = (obj) => {
    let result = 0
    for (let [key, value] of Object.entries(obj)) {
        result += value / 100 * nutritionDB[key]['calories']
    }
    return Number(result.toFixed(1))
}

const lowCarbs = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([key, value]) => value / 100 * nutritionDB[key].carbs < 50
        )
    )
}

const cartTotal = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key,
            Object.fromEntries(
                Object.entries(nutritionDB[key]).map(([key2, value2]) => [
                    key2,
                    Math.round((value / 100 * value2) * 1000) / 1000,
                ])
            ),
        ])
    )
}