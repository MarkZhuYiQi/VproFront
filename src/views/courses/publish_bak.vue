<!--<template>-->
    <!--<el-form ref="video" :model="video" label-width="80px" :rules="rules">-->
        <!--<el-row :gutter="30">-->
            <!--<el-col :span="12">-->
                <!--<el-form-item label="视频名称" prop="video_title">-->
                    <!--<el-input v-model="video.video_title" placeholder="填写视频标题"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item>-->
                    <!--&lt;!&ndash;name组成方式为上传类名['文件字段名']&ndash;&gt;-->
                    <!--<el-upload-->
                            <!--:action="this.APIConfig.UploadImage+'?auth_id='+this.$store.state.user.userObj.auth_id"-->
                            <!--:on-preview="handlePreview"-->
                            <!--:on-success="handleSuccess"-->
                            <!--:on-remove="handleRemove"-->
                            <!--:file-list="fileList2"-->
                            <!--name="Uploader[file]"-->
                            <!--list-type="picture">-->
                        <!--<el-button size="small" type="primary" v-if="showButton">点击上传</el-button>-->
                        <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                    <!--</el-upload>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="内容简介" prop="video_desc">-->
                    <!--<el-input type="textarea" resize="none" v-model="video.video_desc"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item>-->
                    <!--<div id="videoContainer">-->
                        <!--<el-button id="selectVideo" type="primary" v-if="showUploadButton" :disabled="uploadDisabled">视频上传<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
                        <!--<el-button v-if="showUploadProgress" @click="uploadPause()">{{pauseText}}</el-button>-->
                        <!--<div class="player">-->
                            <!--<videoPlayer v-if="!showUploadButton"-->
                                         <!--ref="videoPlayer"-->
                                         <!--:options="playerOptions"-->
                            <!--&gt;</videoPlayer>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<el-progress type="circle" :percentage="uploadPercent" class="uploadProgress" :status="uploadStatus" v-if="showUploadProgress"></el-progress>-->
                <!--</el-form-item>-->
                <!--<el-form-item>-->
                    <!--<el-button @click="showTags">测试tags</el-button>-->
                    <!--<el-button @click="showEditor">测试editor</el-button>-->
                <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
                <!--<el-form-item label="标签">-->
                    <!--<InputTag :on-change="inputLabel" :tags="video.video_tag" placeholder="写下关键字按回车即可"></InputTag>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="视频分类" prop="video_class">-->
                    <!--<el-select v-model="video.video_class" placeholder="请选择分类">-->
                        <!--<el-option v-for="option in this.$store.getters.getVClass" :label="option.nav_text" :value="option.nav_id" :key="option.nav_url"></el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="是否收费" prop="v_free">-->
                    <!--<el-radio-group v-model="video.video_mode">-->
                        <!--<el-radio class="radio" label="free">免费</el-radio>-->
                        <!--<el-radio class="radio" label="pay">付费</el-radio>-->
                    <!--</el-radio-group>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="价格" prop="video_price">-->
                    <!--<el-input placeholder="请输入价格" v-model="video.video_price" :disabled="showPriceText"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item>-->
                    <!--<el-button type="danger" size="large" @click="submitForm()" v-if="CreateOrEdit">发布视频</el-button>-->
                    <!--<el-button type="danger" size="large" @click="modifyForm()" v-if="!CreateOrEdit" :disabled="isModify">修改视频</el-button>-->
                <!--</el-form-item>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
            <!--<el-col :span="24">-->
                <!--<div class="quill-editor-example">-->
                    <!--&lt;!&ndash; quill-editor &ndash;&gt;-->
                    <!--<quill-editor ref="myTextEditor"-->
                                  <!--v-model="content"-->
                                  <!--:options="editorOption"-->
                                  <!--@blur="onEditorBlur($event)"-->
                                  <!--@focus="onEditorFocus($event)"-->
                                  <!--@ready="onEditorReady($event)">-->
                    <!--</quill-editor>-->
                    <!--<div class="html ql-editor" v-html="content"></div>-->
                <!--</div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-dialog title="提示" v-model="showDetail" size="small">-->
            <!--&lt;!&ndash;<span><img  class="showImg" :src="this.$store.state.video.video_cover.url"/></span>&ndash;&gt;-->
            <!--<span><img :src="video.video_cover.url" class="showImg" /></span>-->
        <!--</el-dialog>-->
    <!--</el-form>-->
<!--</template>-->