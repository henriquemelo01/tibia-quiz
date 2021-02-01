import React from "react";
import NextLink from "next/link";


// Por padrão todos os links vão dar reload, assim criou-se este componente para tirar este padrão - navegação Spa (Recurso do Next)

export default function LinkExternal({children, href, ...props}) {
    return (
        <NextLink href = {href} passHref>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}