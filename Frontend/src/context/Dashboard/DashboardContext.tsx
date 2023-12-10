import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {DataCarsMapping} from "./DataCarsMapping";
import {DashboardContextProps} from "./DashboardContextProps";
import React from "react";
import {ICarType} from "./ICarType";
import {IUser} from "./IUser";
import {ICar} from "./ICar";
import {Car} from "../../components/FormCar/Car";
import {SidebarContent} from "../../components/sidebar/SideBarContent";

interface DashboardContextType {
    state: {
        fetchStatus: boolean
        setFetchStatus: React.Dispatch<React.SetStateAction<boolean>>
        carCurrentId: string
        setCarCurrentId: React.Dispatch<React.SetStateAction<string>>
        dataCarsMapping: DataCarsMapping[]
        setDataCarsMapping: React.Dispatch<React.SetStateAction<DataCarsMapping[]>>
        currentUser: IUser | null
        setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>
        showSubDashboard: boolean
        setShowSubDashboard: React.Dispatch<React.SetStateAction<boolean>>
        subSidebarContents: SidebarContent[]
        setSubSidebarContents: React.Dispatch<React.SetStateAction<SidebarContent[]>>
        subSidebarTitle: string
        setSubSidebarTitle: React.Dispatch<React.SetStateAction<string>>
        activeItemSidebar: number
        setActiveItemSidebar: React.Dispatch<React.SetStateAction<number>>
        activeItemSubSidebar: number,
        setActiveItemSubSidebar: React.Dispatch<React.SetStateAction<number>>
        dataBrandCars: ICarType[]
        setDataBrandCars: React.Dispatch<React.SetStateAction<ICarType[]>>
        dataTypeCars: ICarType[],
        setDataTypeCars: React.Dispatch<React.SetStateAction<ICarType[]>>
        dataTransmissionCars: ICarType[],
        setDataTransmissionCars: React.Dispatch<React.SetStateAction<ICarType[]>>
    },
    handleFunction: any
}

export const DashboardContext = createContext<DashboardContextType>({
    state: {
        fetchStatus: true,
        setFetchStatus: () => {},
        carCurrentId: '-1',
        setCarCurrentId: () => {},
        dataCarsMapping: [],
        setDataCarsMapping: () => {},
        currentUser: null,
        setCurrentUser: () => {},
        showSubDashboard: true,
        setShowSubDashboard: () => {},
        subSidebarContents: [] ,
        setSubSidebarContents: () => {},
        subSidebarTitle: "",
        setSubSidebarTitle: () => {},
        activeItemSidebar: 0,
        setActiveItemSidebar: () => {},
        activeItemSubSidebar: 0,
        setActiveItemSubSidebar: () => {},
        dataBrandCars: [],
        setDataBrandCars: () => {},
        dataTypeCars: [],
        setDataTypeCars: () => {},
        dataTransmissionCars: [],
        setDataTransmissionCars: () => {},
    },
    handleFunction: null
})

const DashboardProvider = ({ children }: DashboardContextProps) => {
    let navigate = useNavigate();
    const [fetchStatus, setFetchStatus] = useState(true);
    // const [dataCars, setDataCars] = useState(null);
    const [dataCarsMapping, setDataCarsMapping] = useState<DataCarsMapping[]>([]);
    const [dataTransmissionCars, setDataTransmissionCars] = useState<ICarType[]>([]);
    const [dataTypeCars, setDataTypeCars] = useState<ICarType[]>([]);
    const [dataBrandCars, setDataBrandCars] = useState<ICarType[]>([]);
    const [carCurrentId, setCarCurrentId] = useState('-1');
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);
    const [subSidebarTitle, setSubSidebarTitle] = useState<string>("");
    const [subSidebarContents, setSubSidebarContents] = useState<SidebarContent[]>([]);
    const [activeItemSidebar, setActiveItemSidebar] = useState<number>(0);
    const [activeItemSubSidebar, setActiveItemSubSidebar] = useState<number>(0);
    const [showSubDashboard, setShowSubDashboard] = useState(true);
    const [inputCar, setInputCar] = useState<Car>({
        name: "",
        // price: ,
        // year: "",
        size: "",
        // capacity: "",
        description: "",
        pictureUrl: "",
        carTransmissionId: "",
        carBrandId: "",
        carTypeId: ""
    })

    const fetchDataCurrentUser = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/auth/getCurrentUser`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(({ data }) => {
                let resultData: IUser = data.data;
                setCurrentUser({
                    id: resultData.id,
                    fullName: resultData.fullName,
                    username: resultData.username,
                    pictureUrl: resultData.pictureUrl
                })
                console.log(resultData)
                console.log(currentUser)
                setFetchStatus(false)
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                    console.error(error);
                }
            });

    }
    const fetchDataCars = (stringParam?: string) => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/car${stringParam}`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(({ data }) => {
                let resultData: ICar[] = data.data;
                // setDataCars([...resultData])
                let mappedData = resultData?.map(({id, name, price, carType, createdAt, updatedAt, startRent, finishRent, pictureUrl}) => {
                    return {
                        id: id,
                        pictureUrl: pictureUrl,
                        name: name,
                        type: carType.name,
                        price: price,
                        startRent: moment(startRent).format('DD MMM yyyy HH:mm'),
                        finishRent: moment(finishRent).format('DD MMM yyyy HH:mm'),
                        createdAt: moment(createdAt).format('DD MMM yyyy HH:mm'),
                        updatedAt: moment(updatedAt).format('DD MMM yyyy HH:mm')
                    }
                })
                setDataCarsMapping(mappedData)
                setFetchStatus(false)
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                    console.error(error);
                }
            });

    };
    const fetchDataDetailCar = (id: string) => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/car/${id}`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        }).then(({data}) => {
            let result = data.data;

            setInputCar({
                name: result.name,
                price: result.price,
                year: result.year,
                size: result.size,
                capacity: result.capacity,
                description: result.description,
                pictureUrl: "",
                carTransmissionId: result.carTransmission.id,
                carBrandId: result.carBrand.id,
                carTypeId: result.carType.id
            });
            console.log(inputCar)
        }).catch((error)=>{
                console.log(carCurrentId)
                console.log(error)
        })
    };
    const fetchTransmissionCars = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/car-transmission`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(({ data }) => {
                let resultData = data.data;
                setDataTransmissionCars([...resultData])
            })
            .catch((error) => {
                alert(error)
            });
    }
    const fetchTypeCars = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/car-type`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(({ data }) => {
                let resultData: ICarType[] = data.data;
                setDataTypeCars([...resultData])
            })
            .catch((error) => {

            });
    }
    const fetchBrandCars = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/v1/car-brand`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(({ data }) => {
                let resultData: ICarType[] = data.data;
                setDataBrandCars([...resultData])
            })
            .catch((error) => {
                // if (error.response && error.response.status === 401) {
                // Redirect to the login page
                // For example:
                // history.push('/login');
                // or
                // navigate('/login');
                // console.error(error);
            });
    }
    const handleSubmitCar = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> , input: Car) => {
        event.preventDefault();

        if (carCurrentId === '-1') {
            axios.post(`${process.env.REACT_APP_API_URL}/api/v1/car`, input, {
                headers: { Authorization: `Bearer ${Cookies.get('token')}` }
            })
                .then(({data}) => {

                    // Toast
                    toast.success("Data berhasil disimpan", {
                        position: toast.POSITION.TOP_CENTER,
                        theme: "colored",
                    })
                    setFetchStatus(true)
                    navigate("/cars")
                })
                .catch((error) => {
                    // Toast
                    console.log(error)
                    toast.error(error.response.data.message, {
                        position: toast.POSITION.BOTTOM_CENTER,
                        theme: "colored",
                    })
                    // error.response.data.message
                })
        } else {
            axios.put(`${process.env.REACT_APP_API_URL}/api/v1/car/${carCurrentId}`, input, {
                headers: { Authorization: `Bearer ${Cookies.get('token')}` }
            })
                .then(({data}) => {

                    // Toast
                    toast.success("Data berhasil disimpan", {
                        position: toast.POSITION.TOP_CENTER,
                        theme: "colored",
                    })
                    setFetchStatus(true)
                    navigate("/cars")
                    setCarCurrentId('-1')
                })
                .catch((error) => {
                    // Toast
                    // error.response.data.message
                })
        }
    }
    const handleEdit = (id: string) => {
        setCarCurrentId(id);
        navigate(`/cars/edit/${id}`);
        fetchDataDetailCar(id);
    }
    const handleDelete = (id: string) => {
        setIsLoading(true);
        axios
            .put(`${process.env.REACT_APP_API_URL}/api/v1/car/delete/${id}`, null,{
                headers: { Authorization: "Bearer " + Cookies.get("token") },
            })
            .then(({data}) => {
                toast.success("Berhasil menghapus data", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored",
                });
                // alert(data.message)
                setFetchStatus(true);
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored",
                });
                // alert(error.response.data.message)
            })
            .finally(()=> {
                setIsLoading(false)
            })
    }
    const handleCancelCar = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        navigate("/cars")
        setCarCurrentId('-1')
    }

    let state = {
        fetchStatus,
        setFetchStatus,
        // dataCars,
        // setDataCars,
        carCurrentId,
        setCarCurrentId,
        dataTransmissionCars, setDataTransmissionCars,
        dataTypeCars, setDataTypeCars,
        dataBrandCars, setDataBrandCars,
        inputCar, setInputCar,
        isLoading, setIsLoading,
        dataCarsMapping, setDataCarsMapping,
        currentUser, setCurrentUser,
        subSidebarContents, setSubSidebarContents,
        subSidebarTitle, setSubSidebarTitle,
        activeItemSidebar, setActiveItemSidebar,
        activeItemSubSidebar, setActiveItemSubSidebar,
        showSubDashboard, setShowSubDashboard
    }

    let handleFunction = {
        fetchDataCars,
        handleSubmitCar,
        handleCancelCar,
        fetchTransmissionCars,
        fetchTypeCars,
        fetchBrandCars,
        fetchDataDetailCar,
        handleEdit,
        handleDelete,
        fetchDataCurrentUser
    }

    return (
        <DashboardContext.Provider value={{ state, handleFunction} }>
            <ToastContainer />
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider;
