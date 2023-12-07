import { app } from '.';

app.use('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello from Full-CICD-project using AWS, Docker , Jenkins , Github'
    });
});
