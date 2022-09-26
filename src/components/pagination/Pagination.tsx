import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/redux'
import * as _ from 'lodash'
import './Pagination.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import { setCurrentListPage, setCurrentSearchPage } from '../../redux/slices/pageSlice'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Pagination = ({ locationPathname }: any) => {
    const dispatch = useAppDispatch()
    const location = useLocation()

    const params = useParams()
    const totalListPages = useAppSelector(state => state.pagination.totalListPages)
    const totalSearchPages = useAppSelector(state => state.pagination.totalSearchPages)


    // console.log(locationPathname, 'locationPathname');


    let paramsPage: number | undefined | string = params?.pageNumber ?? 1
    paramsPage = +paramsPage
    // console.log('location', location);
    // console.log('params', params);
    // console.log('params', parseInt(params?.pageNumber) ?? 1);

    console.log('paramsPage', paramsPage);

    useEffect(() => {
        // dispatch(setCurrentPage(paramsPage))
        if (!locationPathname.includes('search')) {
            dispatch(setCurrentListPage(paramsPage))
            // console.log('here');

        } else {
            dispatch(setCurrentSearchPage(paramsPage))
            // console.log('there');


        }

        // console.log('currentPage', currentPage);

    }, [totalListPages, totalSearchPages])


    // let totalProductsAmount = +useAppSelector(state => state.filter.totalProductsAmount)
    const totalPages = !locationPathname.includes('search') ? totalListPages : totalSearchPages
    // console.log(totalPages, 'totalPages');

    let pagesArray: any = _.range(1, totalPages + 1)
    // console.log(pagesArray,'sadad');


    // let totalPages = pagesArray.length

    const prevPage = () => {
        let p = 1
        if (paramsPage) {
            if (1 >= paramsPage) {
                p = 1

            } else {
                p = +paramsPage - 1

            }

        }

        return p
    }

    const nextPage = () => {
        let p = 2
        if (paramsPage) {
            if (paramsPage >= totalPages) {
                p = totalPages

            } else {
                p = +paramsPage + 1

            }

        }

        return p
    }


    let l = !locationPathname.includes('search') ? '/products/page/' : '/products/search/page/'

    let prev = <li>
        <Link to={l + prevPage()} className="arrows_inner">
            <ChevronLeftIcon />
        </Link>
    </li>

    let next = <li>
        <Link to={l + nextPage()} className="arrows_inner">
            <ChevronRightIcon />
        </Link>
    </li>


    const page = (p: number) => `${l}${p}`

    const liNavlink = 'li-navlink '
    const pageActive = 'page-active'

    const setClassName = (paramsPage: any, p: number) => paramsPage === p ? liNavlink + pageActive : liNavlink


    const currentPageIndex = pagesArray.indexOf(paramsPage)

    let leftPages = pagesArray.slice(currentPageIndex - 3, currentPageIndex).length ? pagesArray.slice(currentPageIndex - 3, currentPageIndex) : pagesArray.slice(0, currentPageIndex)

    let rightPages = pagesArray.slice(currentPageIndex + 1, currentPageIndex + 4)
    pagesArray = [...leftPages, paramsPage, ...rightPages]
    // console.log(pagesArray.slice(currentPageIndex + 1, currentPageIndex + 4), 'pagesArray.slice(currentPageIndex + 1, currentPageIndex + 4)');


    let pagesArrayForOption = pagesArray

    // console.log(pagesArray, 'pagesArray');

    // console.log(leftPages, 'leftPages');
    // console.log(rightPages, 'rightPages')



    pagesArray = pagesArray.map((p: number) => {
        // console.log(p);
        return (
            <li key={p}>
                <Link to={page(p)} className={setClassName(paramsPage, p)}>
                    {p}
                </Link>
            </li>
        )
    })

    // console.log(pagesArrayForOption.includes(paramsPage), 'pagesArrayForOption');

    return (
        <>
            {
                totalPages > 1 && (
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <ul className='ul'>
                            {prev}
                            {
                                !pagesArrayForOption.includes(1) &&
                                <>
                                    <li>
                                        <Link to={page(1)} className={setClassName(paramsPage, 1)}>
                                            {1}
                                        </Link>
                                    </li>
                                    <li>
                                        ...
                                    </li>
                                </>
                            }
                            {pagesArray}
                            {
                                !pagesArrayForOption.includes(totalPages) &&
                                <>
                                    <li>
                                        ...
                                    </li>
                                    <li>
                                        <Link to={page(totalPages)} className={setClassName(paramsPage, totalPages)}>
                                            {totalPages}
                                        </Link>
                                    </li>
                                </>
                            }
                            {next}
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default Pagination