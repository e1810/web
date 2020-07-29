dirname="/home/y61mpnl/project/web/new/niconico_ranking_rss"
mkdir -p $dirname
filename="$dirname/hourly_ranking_`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"
curl -s -o $filename -H "User-Agent: CrawlBot; v.iceele1810@gmail.com" https://www.nicovideo.jp/ranking/genre/all?rss=2.0&lang=ja-jp
