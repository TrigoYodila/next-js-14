// type DetailsProductProps = {
//    params:{
//     productId:string
//    }
// }

// {params:DetailsProductProps}

// type DetailsProductProps = {
//     productId:string
// }

// {params} : {params:DetailsProductProps}

export default function DetailsProduct({params}:{params:{productId:string}}){
    return (
        <div>
            <h1>Details of product {params.productId}</h1>
        </div>
    )
}