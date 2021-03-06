import React, { Component } from "react";
import { SectionWrapper, GridView } from "../../../desktop_shared/layouts";
import {
  CatalogueCard,
  // CatalogueCardSkeleton,
} from "../../../desktop_shared/components/media_cards/catalogue_card";
import {
  VideoCard,
  // VideoCardSkeleton,
} from "../../../desktop_shared/components/media_cards/video_card";

class SectionSuggestion extends Component {
  handlePlayClick = (id) => () => {
    console.log("Play ID: ", id);
  };

  handleSaveClick = (id) => () => {
    console.log("Save ID: ", id);
  };

  handleVideoCardClick = (id) => () => {
    console.log(id);
  };

  render() {
    return (
      <SectionWrapper title="为你推荐">
        <GridView
          style={{ marginBottom: "40px" }}
          colNumber={5}
          colMinWidth="160px"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <CatalogueCard
              key={item}
              id={808080}
              title="老豆唔怕多"
              descrp="刘德华刘若英舍命护宝强"
              coverImage="https://lf3-xgcdn-tos.pstatp.com/img/xigua-lvideo-pic/04b6cd50643937da04d5a5698c920324~tplv-crop-center:861:1203.jpg"
              infoImage="https://lf1-xgcdn-tos.pstatp.com/img/xigua-lvideo-pic/5f709fc9f8dd19e0bf6f732e6d8829a9~tplv-noop.webp"
              handlePlayClick={this.handlePlayClick}
              handleSaveClick={this.handleSaveClick}
              movieRatings={8.0}
              movieType={["电影", "1994", "犯罪", "动作"]}
              movieCasters={["刘德华", "陈少霞", "刘松仁", "刘松仁2"]}
              movieSynopsis="该片以三十年代的上海为背景，讲述了张一鹏身上的故事。
          张一鹏留学归国后，他被任命为上海市禁烟行动的第一专员。新官上任三把火，短期内他便展开一系列动作，以示权威。
          署长和毒枭大佬是拜把兄弟，两人一起进行非法交易，见数次向张行贿无果，他们发毒誓要让张生不如死"
              size="fluid"
            />
          ))}
        </GridView>

        <GridView colNumber={4} colMinWidth="160px" rowHeight="240px">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <VideoCard
              key={item}
              id={399290}
              coverImage="https://i.ytimg.com/vi/JMEY-obUvmw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGJZSVrCl2k-_4Kl0pLZjqSp9CFw"
              //thumbnailVideo="https://v3-tt.ixigua.com/8314b3c5b09499065ee16ea0cf9dbf54/5e958c20/video/tos/cn/tos-cn-v-0000/cfcd0c1cbf024f6fb54f5917f3508a7d/?a=1768&br=0&bt=466&cr=0&cs=0&dr=0&ds=1&er=&l=202004141710370100140440790E661206&lr=&qs=13&rc=anNnd3FoOm9pczMzZmc8M0Apb3E2Njg4ajQ7ZTMzOTpneWdpazAwMjJkLjVfLS0zNGFzc2RtYXFrYjRpY20tLWBhNi06Yw%3D%3D&vl=&vr="
              duration={302}
              creator="科幻Fans布玛"
              creatorAvatar="https://p3.pstatp.com/large/ef40008c39119bef556"
              title="女子死后来到阴间，没想到死神是自己爸爸，当场就复活了"
              postedDate="2020-04-13T15:19:16.265Z"
              viewCount={8920}
            />
          ))}
        </GridView>
      </SectionWrapper>
    );
  }
}

export default SectionSuggestion;
