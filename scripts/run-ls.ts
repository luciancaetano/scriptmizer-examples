import {
    command, onAction, option, sm,
} from 'scriptmizer';

command('lsDir', async () => {
    option('--directory <dir>', 'Prodive a directory name defaults', __dirname);

    onAction(async () => {
        const dir = sm.getOption('directory').toString();

        await sm.shellExec(`ls -ls ${dir}`, { log: false });
    });
});
