import { CircularProgress } from '@mui/material'
import s from './Loader.module.css'

export const Loader = () => (
    <div className={s.loader}>
        <CircularProgress color='info' />
    </div>
)
