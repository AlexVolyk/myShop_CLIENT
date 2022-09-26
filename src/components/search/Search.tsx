import React, { useEffect, useState } from 'react'
import './search.scss'

import SearchIcon from '@mui/icons-material/Search';
import useProductsSearch from '../../hook/useProductsSearch';
import { useAppDispatch, useAppSelector } from '../../redux/redux';
import { resetSearch, setSearch, setSearchProducts } from '../../redux/slices/searchSlice';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { setTotalProductsAmount } from '../../redux/slices/filterSlice';
import { setTotalPages, setTotalSearchPages } from '../../redux/slices/pageSlice';
import { toast } from 'react-toastify';

// type urlType = {
//   hash: string
//   host: string
//   hostname: string
//   href: string
//   origin: string
//   password: string
//   pathname: string
//   port: string
//   protocol: string
//   search: string
//   searchParams: any
//   username: string
// }

const Search = () => {
  // const [search, setSearch] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  let [searchParams, setSearchParams] = useSearchParams();

  const search = useAppSelector(state => state.search.search)
  const currentSearchPage = useAppSelector(state => state.pagination.currentListPage)

  let currentPage = currentSearchPage
  const { data, error, isLoading, refetch, isError } = useProductsSearch({ search, currentPage })


  useEffect(() => {
    if (error) {
      console.log(error, 'error');
      let er: any = error
      toast.error(er.response.data.message)
      // dispatch(setTotalProductsAmount(data?.result[0].totalProducts))

    }
    if (data?.products) {
      console.log('sssss');

      dispatch(setSearchProducts(data?.products))

      dispatch(setTotalSearchPages(data?.result[0].totalPages))
      dispatch(setTotalProductsAmount(data?.result[0].totalProducts))
    }

  }, [isLoading, data, error])

  async function searchProccess(e: any) {
    if (e.code === 'Enter') {
      if (search.length >= 1)
        setSearchParams({ search: search })
      await refetch()

      if (!location.pathname.includes('search')) {
        console.log('yee boy');

        navigate('/products/search')
      }

    }

  }


  return (
    <>
      <div className='Search'>
        {/* {
          !isLoading && data && (
            <p>
              {'data'}
            </p>
          )
        } */}
        <div className='Search-input-inner'>
          <input
            type="text"
            placeholder='Search'
            className='Search-input'
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            onKeyUp={searchProccess}
          />
          <div className='Search-input-icon'>
            <SearchIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search