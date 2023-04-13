import React from "react";
import "./App.css";

export default function TopHeader() {
  return (
    <header className="TopHeader">
      <nav className="gnb">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2 MainBar">
              <button>
                <i className="xi-bars"></i>
              </button>
              <h1>
                <a href="">Wanted</a>
              </h1>
            </div>
            <div className="col-9 col-md-7 Menu">
              <ul>
                <li className="max-size">
                  <a href="">홈</a>
                </li>
                <li>
                  <a href="">채용</a>
                </li>
                <li>
                  <a href="">이벤트</a>
                </li>
                <li className="min-size">
                  <a href="">직군별 연봉</a>
                </li>
                <li className="min-size">
                  <a href="">이력서</a>
                </li>
                <li className="min-size">
                  <a href="">커뮤니티</a>
                </li>
                <li className="min-size">
                  <a href="">프리랜서</a>
                </li>
                <li className="min-size">
                  <a href="">AI 합격예측</a>
                </li>
              </ul>
            </div>
            <div className="col-3 col-md-3 PlusMenu">
              <aside>
                <ul>
                  <li>
                    <button>
                      <a href="">
                        <i class="xi-search"></i>
                      </a>
                    </button>
                  </li>
                  <li>
                    <button>
                      <a href="">
                        <i className="xi-bell-o"></i>
                      </a>
                    </button>
                  </li>
                  <li className="max-size">
                    <button>
                      <a href="">
                        <i className="xi-ellipsis-h"></i>
                      </a>
                    </button>
                  </li>
                  <li className="min-size">
                    <button>
                      <a href="">
                        <i className="xi-profile-o"></i>
                      </a>
                    </button>
                  </li>
                </ul>
                <button className="min-size companyservice">
                  <a href="">기업 서비스</a>
                </button>
              </aside>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
