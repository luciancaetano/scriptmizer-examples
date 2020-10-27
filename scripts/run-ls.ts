import {
    command, onAction, option, sm,
} from 'scriptmizer';

command('lsDir', () => {
    option('-d, --directory', 'Prodive a directory name defaults to __dirname', __dirname);

    onAction(async () => {
        const dir = sm.getOption('d');

        await sm.shellExec(`ls -ls ${dir}`, { log: false });
    });
});
