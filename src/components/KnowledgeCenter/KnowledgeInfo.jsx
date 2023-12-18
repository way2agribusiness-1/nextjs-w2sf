import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors } from '../../actions/productAction';
import Loader from '../Layouts/Loader';
import MetaData from '../Layouts/MetaData';
import { getAllKnowledge } from '../../actions/knowledgeAction';
import Knowledge from './Knowledge';
import axios from 'axios';
import { Helmet } from 'react-helmet';
const KnowledgeInfo = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const { knowledges, loading, error } = useSelector(
    (state) => state.knowledges
  );
  const keyword = params.keyword;
  const [keywords, setKeywords] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [backlinks, setBacklinks] = useState('');
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    dispatch(getAllKnowledge(keyword));
  }, [dispatch, keyword, error, enqueueSnackbar]);
  async function fetchData() {
    const seoResponse = await axios.get('/api/v1/getSeo');
    const aboutUsSeoData = seoResponse.data.data.filter(
      (pages) => pages.page === 'knowledge center'
    )[0];
    setBacklinks(aboutUsSeoData.backLinks);
    setMetaDesc(aboutUsSeoData.metaDesc);
    setKeywords(aboutUsSeoData.keywords);
    setMetaTitle(aboutUsSeoData.metaTitle);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>AllKnowledges | Way2SmartFarmer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="meta_title" content={metaTitle} />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={metaDesc} />
        <link
          rel="canonical"
          href="https://www.way2smartfarmer.com/knowledges"
        ></link>
      </Helmet>
      <main className="w-full green-text overflow-hidden">
        <div className="hidden">
          {backlinks.split(',').map((backlink, index) => (
            <a
              key={index}
              href={backlink.trim()}
              target="_blank"
              rel="noreferrer"
              name="backlinks"
            >
              {backlink.trim()}
            </a>
          ))}
        </div>
        {/* <!-- row --> */}
        {/* <!-- search column --> */}
        {!loading && knowledges?.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 shadow-sm rounded-sm p-6 sm:p-16">
            <img
              draggable="false"
              className="w-1/2 object-contain"
              src="https://www.way2smartfarmer.com/img/logo.jpeg"
              alt="Search Not Found"
              style={{ height: '266px' }}
            />
            <h1 className="text-2xl font-medium text-gray-900">
              Sorry, no results found!
            </h1>
            <p className="text-xl text-center text-primary-grey">
              Please check the spelling or try searching for something else
            </p>
          </div>
        )}

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-0 lg:mt-14 sm:grid-cols-4 w-full place-content-start  pb-4 border-b">
            <h2 className="font-bold  text-center text-2xl lg:text-5xl mt-2">
              Knowledge Center
            </h2>
            <div className="Knmain">
              {knowledges?.map((knowledge) => (
                <Knowledge {...knowledge} key={knowledge._id} />
              ))}
            </div>
          </div>
        )}
        {/* <!-- search column --> */}
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default KnowledgeInfo;
