export default {
    title: 'Release Package Checklist',
    description: 'Compact checklist before upload or deploy.',
    items: [
        {
            id: 'npm-install',
            label: 'npm install',
            status: 'ready-for-review',
            notes: 'Install dependencies before building.'
        },
        {
            id: 'npm-run-build',
            label: 'npm run build',
            status: 'ready-for-review',
            notes: 'Create the static output package.'
        },
        {
            id: 'npm-run-preview',
            label: 'npm run preview',
            status: 'ready-for-review',
            notes: 'Review the built output locally.'
        },
        {
            id: 'forbidden-strings-scan',
            label: 'forbidden strings scan',
            status: 'ready-for-review',
            notes: 'Confirm restricted legacy terms are absent from source copy.'
        },
        {
            id: 'dist-exists',
            label: 'dist exists',
            status: 'ready-for-review',
            notes: 'Confirm the generated output directory exists.'
        },
        {
            id: 'static-files-exist',
            label: 'static files exist',
            status: 'ready-for-review',
            notes: 'Confirm publishing files are included in the output.'
        },
        {
            id: 'custom-domain-ready',
            label: 'custom domain ready',
            status: 'ready-for-review',
            notes: 'Confirm the publishing target is prepared.'
        }
    ]
};
