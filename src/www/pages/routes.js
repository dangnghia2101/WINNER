import { lazy } from 'react'

//Layouts:
import MarketLayout from '../components/layout/market-layout'
import GameLayout from '../components/layout/game-layout'

//Pages
const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const CreateNft = lazy(() => import("./create-nft"))
const Started = lazy(() => import("./started"))
const Profile = lazy(() => import("./profile"))

const routes = [
    {
        path: "/",
        exact: true,
        public: true,
        component: Started,
        layout: MarketLayout
    },
    {
        path: "/collection/detail",
        exact: true,
        public: true,
        component: DetailCollections,
        layout: MarketLayout
    },
    {
        path: "/nft/:id",
        exact: true,
        public: true,
        component: DetailNft,
        layout: MarketLayout
    },
    {
        path: "nft/create",
        exact: true,
        public: true,
        component: CreateNft,
        layout: MarketLayout
    },
    {
        path: "started",
        exact: true,
        public: true,
        component: Started,
        layout: MarketLayout
    },
    {
        path: "profile",
        exact: true,
        public: true,
        component: Profile,
        layout: MarketLayout
    },

]

export default routes