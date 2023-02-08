import React from 'react'
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer>
            {t('footer')}  &nbsp; <b> David Ledezma </b>
        </footer>
    )
}
