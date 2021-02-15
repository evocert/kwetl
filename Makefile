ZIP=zip
UNZIP=unzip
SRC=./src
TGTDIR=./dist
TGT=$(TGTDIR)/lib.zip
all:dist_
dist_:
	-rm -rf $(TGTDIR)
	mkdir $(TGTDIR)
	cd ./src;$(ZIP) -r ./lib.zip ./*;mv ./lib.zip ../dist;cd ../;pwd
clean:
	-rm -rf $(TGTDIR)
.phony:dist_ clean
