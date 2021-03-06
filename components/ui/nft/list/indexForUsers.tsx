import { FunctionComponent } from 'react';
import { useListedNfts } from '@hooks/web3';
import NftItemForUsers from '../item/itemForUsers'

const NftListForUsers: FunctionComponent = () => {
    const { nfts } = useListedNfts();
    return <>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            { nfts.data?.map(nft =>
                <div key={nft.meta.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <NftItemForUsers
                        nft={nft}
                        buyNft={nfts.buyNft}
                    />
                </div>
            )}
        </div>
    </>
}

export default NftListForUsers;
