import mongoose from 'mongoose';

const Product = mongoose.model('Product');

module.exports = {
    async index(req: { query: { page?: 1; }; }, res: { json: (arg0: mongoose.PaginateResult<any>) => any; }) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 }); // aqui foi onde criou o banco com title React Native, lá no routes

        return res.json(products);
    },

    async show(req: { params: { id: String; }; }, res: { json: (arg0: any) => any; }) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req: { body: String; }, res: { json: (arg0: any) => any; }) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req: { params: { id: String; }; body: mongoose.UpdateQuery<any>; }, res: { json: (arg0: any) => any; }) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true });

        return res.json(product);
    },

    async destroy(req: { params: { id: String; }; }, res: { send: () => any; }) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};