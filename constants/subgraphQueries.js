import { gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
    {
        itemListeds(first: 5) {
            id
            seller
            nftAddress
            tokenId
            price
        }
    }
`
export default GET_ACTIVE_ITEMS
