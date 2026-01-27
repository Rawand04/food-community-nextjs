import classes from '@/app/loading.module.css'
export default function loadingPage(){
    return <p className={classes.loading}>
        Fetching meals...
    </p>
}