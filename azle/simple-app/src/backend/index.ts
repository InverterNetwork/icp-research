import { Server } from 'azle';
// import { ethers } from 'ethers';
import express, { Request } from 'express';
import abi from './ivtrAbi.json'

let db = {
    hello: ''
};

export default Server(() => {
    const app = express();

    app.use(express.json());

    app.get('/wallet-from-private-key', (req, res) => {

    });

    app.get('/token', async (req, res) => {
        try {
            let url = "https://testnet.bitfinity.network";
        } catch (e) {
            res.json({
                error: e
            });
        }
    });

    app.get('/db', (req, res) => {
        res.json(db);
    });

    app.post('/db/update', (req: Request<any, any, typeof db>, res) => {
        db = req.body;

        res.json(db);
    });

    app.use(express.static('/dist'));

    return app.listen();
});
