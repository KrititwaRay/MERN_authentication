/* const TryCatch = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next)
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

export default TryCatch; */



const TryCatch = (handler) => {

    if (typeof handler !== "function") {
        throw new TypeError("Handler must be a function");
    }

    return async (req, res, next) => {
        try {

            await handler(req, res, next);

        } catch (error) {

            next(error);

        }
    };
};

export default TryCatch;

