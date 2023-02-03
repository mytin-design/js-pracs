function phoneLook(val) {
    let result  = "";

    const lookup = {
        "Adams": "0938328",
        "charlie": "349234",
        "beyonce" : "4374932",
        "alex": "4393203",
        "itass" : "3843032",
        "berrick": "32903232"
    }
    result = lookup[val];
    return result;
}

console.log(phoneLook("beyonce"));
