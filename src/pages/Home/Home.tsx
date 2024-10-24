import React, { useEffect } from 'react'
import Carousel from '../../components/Carousel'
import SearchBox from '../../components/SearchBox'
import Anywhere from '../../components/Anywhere'
import { LocationModelType } from '../../models/LocationModelType'
import { DispatchType, RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLocationApi } from '../../redux/reducers/locationReducer'
import LocationCard from '../../components/LocationCard'

type Props = {}

const Home = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const { arrLocation } = useSelector((state: RootState) => state.locationReducer)

  const getAllLocation = async () => {
    const actionAsync = getAllLocationApi();
    dispatch(actionAsync)
  }

  useEffect(() => {
    getAllLocation()
  }, [])

  return (
    <div style={{ minHeight: 1000 }}>
      <Carousel></Carousel>
      <SearchBox></SearchBox>

      {/* Filter */}
      <div className='location'>
        <div className="container">
          <div className="row location-container">
            {
              arrLocation.slice(0, 8).map((item: LocationModelType, index: number) => {
                return <div key={index} className='col-3 location-box'>
                  <LocationCard location={item} />
                </div>
              })
            }
          </div>
        </div>
      </div>

      <Anywhere></Anywhere>
    </div>
  )
}

export default Home