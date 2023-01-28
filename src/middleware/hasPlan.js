module.exports=function hasPLan(plan) {
    return async(req, res, next) => {
        if(req.user && req.plan.user == plan) {
            next()
        } else {
            res.status(401).send('Unauthorized')
        }
    }
}